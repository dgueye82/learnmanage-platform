import { useEffect, useState } from "react";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { useStudent } from "@/contexts/StudentContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Student {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string | null;
}

const ManageStudent = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { setSelectedStudentId } = useStudent();

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .order("last_name");

      if (error) throw error;
      setStudents(data || []);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast({
        title: "Erreur",
        description: "Impossible de charger la liste des élèves",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStudentClick = (student: Student) => {
    setSelectedStudentId(student.id);
    navigate(`/student/${student.id}/profile`);
  };

  return (
    <Layout>
      <div className="container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Liste des Élèves</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Élèves inscrits</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nom</TableHead>
                  <TableHead>Prénom</TableHead>
                  <TableHead>Date de naissance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow 
                    key={student.id} 
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => handleStudentClick(student)}
                  >
                    <TableCell>{student.last_name}</TableCell>
                    <TableCell>{student.first_name}</TableCell>
                    <TableCell>
                      {student.date_of_birth
                        ? new Date(student.date_of_birth).toLocaleDateString()
                        : "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ManageStudent;