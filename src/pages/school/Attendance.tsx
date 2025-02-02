import { Layout } from "@/components/Layout";
import { useSchool } from "@/contexts/SchoolContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Attendance = () => {
  const { selectedSchool } = useSchool();
  const { toast } = useToast();
  const [isAddingAttendance, setIsAddingAttendance] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [newAttendance, setNewAttendance] = useState({
    date: new Date().toISOString().split('T')[0],
    status: "present",
    note: "",
  });

  const { data: students } = useQuery({
    queryKey: ['students', selectedSchool?.id],
    queryFn: async () => {
      if (!selectedSchool?.id) return [];
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('school_id', selectedSchool.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedSchool?.id,
  });

  const { data: attendance, refetch } = useQuery({
    queryKey: ['attendance', selectedSchool?.id],
    queryFn: async () => {
      if (!selectedSchool?.id) return [];
      const { data, error } = await supabase
        .from('attendance')
        .select(`
          *,
          students (
            first_name,
            last_name
          )
        `)
        .eq('students.school_id', selectedSchool.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedSchool?.id,
  });

  const handleAddAttendance = async () => {
    if (!selectedSchool || !selectedStudent) return;

    try {
      const { error } = await supabase
        .from('attendance')
        .insert({
          student_id: selectedStudent,
          date: newAttendance.date,
          status: newAttendance.status,
          note: newAttendance.note,
        });

      if (error) throw error;

      setIsAddingAttendance(false);
      setNewAttendance({
        date: new Date().toISOString().split('T')[0],
        status: "present",
        note: "",
      });
      setSelectedStudent(null);
      refetch();
      toast({
        title: "Succès",
        description: "La présence a été enregistrée avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement de la présence",
        variant: "destructive",
      });
    }
  };

  if (!selectedSchool) {
    return (
      <Layout>
        <div className="container py-8">
          <h1>Veuillez d'abord sélectionner une école</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Présences</h1>
            <p className="text-gray-600">Suivez la présence des élèves</p>
          </div>
          <Dialog open={isAddingAttendance} onOpenChange={setIsAddingAttendance}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Marquer une présence
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enregistrer une présence</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="student">Élève</Label>
                  <Select onValueChange={setSelectedStudent} value={selectedStudent || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un élève" />
                    </SelectTrigger>
                    <SelectContent>
                      {students?.map((student) => (
                        <SelectItem key={student.id} value={student.id}>
                          {student.first_name} {student.last_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newAttendance.date}
                    onChange={(e) => setNewAttendance({ ...newAttendance, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Statut</Label>
                  <Select 
                    onValueChange={(value) => setNewAttendance({ ...newAttendance, status: value })}
                    value={newAttendance.status}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionner un statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="present">Présent</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                      <SelectItem value="late">En retard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="note">Note</Label>
                  <Input
                    id="note"
                    value={newAttendance.note}
                    onChange={(e) => setNewAttendance({ ...newAttendance, note: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddAttendance} className="w-full">
                  Enregistrer
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attendance?.map((record: any) => (
            <Card key={record.id}>
              <CardHeader>
                <CardTitle>
                  {record.students.first_name} {record.students.last_name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Date: {new Date(record.date).toLocaleDateString()}</p>
                <p className="text-gray-600">Statut: {record.status}</p>
                {record.note && <p className="text-gray-600">Note: {record.note}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Attendance;