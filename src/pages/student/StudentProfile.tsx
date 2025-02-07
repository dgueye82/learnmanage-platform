
import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { StudentForm } from "@/components/student/StudentForm";
import { useNavigate, useParams } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Student, Class, GradeLevel, TeacherSubjectClass } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const StudentProfile = () => {
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const { studentId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const { data: student, refetch: refetchStudent } = useQuery({
    queryKey: ['student', studentId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("students")
        .select(`
          *,
          class:classes(*),
          grade_level:grade_levels(*)
        `)
        .eq("id", studentId)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { data: teacherSubjects } = useQuery({
    queryKey: ['teacherSubjects', student?.class_id],
    queryFn: async () => {
      if (!student?.class_id) return [];
      
      const { data, error } = await supabase
        .from("teacher_subject_class")
        .select(`
          *,
          teacher:teachers(*),
          subject:subjects(*)
        `)
        .eq("class_id", student.class_id);

      if (error) throw error;
      return data;
    },
    enabled: !!student?.class_id,
  });

  const handleDelete = async () => {
    if (!student) return;

    try {
      const { error } = await supabase
        .from("students")
        .delete()
        .eq("id", student.id);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "L'élève a été supprimé avec succès",
      });
      
      navigate("/manage-student");
    } catch (error) {
      console.error("Error deleting student:", error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'élève",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Profil de l'Élève
            </h1>
            <div className="space-x-2">
              <Dialog open={isEditingStudent} onOpenChange={setIsEditingStudent}>
                <DialogTrigger asChild>
                  <Button variant="outline">Modifier</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Modifier l'élève</DialogTitle>
                  </DialogHeader>
                  {student && (
                    <StudentForm
                      mode="edit"
                      initialData={student}
                      onSuccess={() => {
                        setIsEditingStudent(false);
                        refetchStudent();
                      }}
                    />
                  )}
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">Supprimer</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Confirmer la suppression
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Êtes-vous sûr de vouloir supprimer cet élève ? Cette
                      action est irréversible.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Supprimer
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>

        {student ? (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Nom complet</h3>
                    <p>{student.first_name} {student.last_name}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Date de naissance</h3>
                    <p>
                      {student.date_of_birth
                        ? new Date(student.date_of_birth).toLocaleDateString()
                        : "Non renseignée"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Genre</h3>
                    <p>{student.gender || "Non renseigné"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Lieu de naissance</h3>
                    <p>{student.birth_place || "Non renseigné"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informations scolaires</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Classe</h3>
                    <p>{(student.class as Class)?.name || "Non assignée"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Niveau</h3>
                    <p>{(student.grade_level as GradeLevel)?.name || "Non assigné"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {teacherSubjects && teacherSubjects.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Professeurs et Matières</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teacherSubjects.map((ts: TeacherSubjectClass) => (
                      <div key={ts.id} className="flex justify-between items-center border-b pb-2">
                        <div>
                          <h3 className="font-semibold">{ts.subject?.name}</h3>
                          <p className="text-sm text-gray-600">
                            {ts.teacher?.first_name} {ts.teacher?.last_name}
                          </p>
                        </div>
                        <div className="text-sm text-gray-600">
                          Coefficient: {ts.subject?.coefficient || 1}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p>{student.address || "Non renseignée"}</p>
                    <p>{student.city} {student.postal_code}</p>
                    <p>{student.country}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p>Tél: {student.phone || "Non renseigné"}</p>
                    <p>Email: {student.email || "Non renseigné"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact d'urgence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Nom</h3>
                    <p>{student.emergency_contact_name || "Non renseigné"}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p>Tél: {student.emergency_contact_phone || "Non renseigné"}</p>
                    <p>Email: {student.emergency_contact_email || "Non renseigné"}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card>
            <CardContent>
              <p className="text-gray-600 py-4">
                Chargement des informations...
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default StudentProfile;
