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

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string | null;
}

const StudentProfile = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [isEditingStudent, setIsEditingStudent] = useState(false);
  const { studentId } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const fetchStudent = async () => {
    if (!studentId) return;

    try {
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", studentId)
        .single();

      if (error) throw error;
      setStudent(data);
    } catch (error) {
      console.error("Error fetching student:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les informations de l'élève",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchStudent();
  }, [studentId]);

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
          <p className="text-gray-600">
            Gérez les informations personnelles et les détails de l'élève
          </p>
        </div>

        {student ? (
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>
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