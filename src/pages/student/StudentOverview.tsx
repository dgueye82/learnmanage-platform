import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useParams } from "react-router-dom";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: string;
  birth_place: string;
  status: string;
  class_id: string;
  address: string;
  city: string;
  postal_code: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  emergency_contact_email: string;
}

interface Attendance {
  present: number;
  absent: number;
}

const StudentOverview = () => {
  const [student, setStudent] = useState<Student | null>(null);
  const [attendance, setAttendance] = useState<Attendance>({ present: 0, absent: 0 });
  const [loading, setLoading] = useState(true);
  const { studentId } = useParams();
  const { toast } = useToast();

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const fetchStudentData = async () => {
    try {
      const { data: studentData, error: studentError } = await supabase
        .from("students")
        .select(`
          *,
          classes (
            name,
            level
          )
        `)
        .eq("id", studentId)
        .single();

      if (studentError) throw studentError;

      const { data: attendanceData, error: attendanceError } = await supabase
        .from("attendance")
        .select("status")
        .eq("student_id", studentId);

      if (attendanceError) throw attendanceError;

      const present = attendanceData?.filter(a => a.status === "present").length || 0;
      const absent = attendanceData?.filter(a => a.status === "absent").length || 0;

      setStudent(studentData);
      setAttendance({ present, absent });
    } catch (error) {
      console.error("Error fetching student data:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les informations de l'étudiant",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [studentId]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-8">
          <p>Chargement des informations...</p>
        </div>
      </Layout>
    );
  }

  if (!student) {
    return (
      <Layout>
        <div className="container py-8">
          <p>Étudiant non trouvé</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informations personnelles</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Identité</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Prénom:</span> {student.first_name}</p>
                <p><span className="font-medium">Nom:</span> {student.last_name}</p>
                <p><span className="font-medium">Genre:</span> {student.gender || "Non renseigné"}</p>
                <p>
                  <span className="font-medium">Date de naissance:</span>{" "}
                  {student.date_of_birth ? new Date(student.date_of_birth).toLocaleDateString() : "Non renseignée"}
                </p>
                <p><span className="font-medium">Lieu de naissance:</span> {student.birth_place || "Non renseigné"}</p>
                <p>
                  <span className="font-medium">Âge:</span>{" "}
                  {student.date_of_birth ? `${calculateAge(student.date_of_birth)} ans` : "Non renseigné"}
                </p>
                <p>
                  <span className="font-medium">Statut:</span>{" "}
                  <span className={`${student.status === "actif" ? "text-green-600" : "text-red-600"}`}>
                    {student.status || "Non renseigné"}
                  </span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Coordonnées</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Adresse:</span> {student.address || "Non renseignée"}</p>
                <p><span className="font-medium">Ville:</span> {student.city || "Non renseignée"}</p>
                <p><span className="font-medium">Code postal:</span> {student.postal_code || "Non renseigné"}</p>
                <p><span className="font-medium">État/Région:</span> {student.state || "Non renseigné"}</p>
                <p><span className="font-medium">Pays:</span> {student.country || "Non renseigné"}</p>
                <p><span className="font-medium">Téléphone:</span> {student.phone || "Non renseigné"}</p>
                <p><span className="font-medium">Email:</span> {student.email || "Non renseigné"}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact d'urgence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-medium">Nom:</span> {student.emergency_contact_name || "Non renseigné"}</p>
            <p><span className="font-medium">Téléphone:</span> {student.emergency_contact_phone || "Non renseigné"}</p>
            <p><span className="font-medium">Email:</span> {student.emergency_contact_email || "Non renseigné"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Présence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><span className="font-medium">Nombre de présences:</span> {attendance.present}</p>
            <p><span className="font-medium">Nombre d'absences:</span> {attendance.absent}</p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentOverview;