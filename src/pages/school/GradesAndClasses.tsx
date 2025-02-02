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

const GradesAndClasses = () => {
  const { selectedSchool } = useSchool();
  const { toast } = useToast();
  const [isAddingClass, setIsAddingClass] = useState(false);
  const [newClass, setNewClass] = useState({
    name: "",
    level: "",
    academic_year: new Date().getFullYear().toString(),
  });

  const { data: classes, refetch } = useQuery({
    queryKey: ['classes', selectedSchool?.id],
    queryFn: async () => {
      if (!selectedSchool?.id) return [];
      const { data, error } = await supabase
        .from('classes')
        .select('*')
        .eq('school_id', selectedSchool.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedSchool?.id,
  });

  const handleAddClass = async () => {
    if (!selectedSchool) return;

    try {
      const { error } = await supabase
        .from('classes')
        .insert({
          name: newClass.name,
          level: parseInt(newClass.level),
          academic_year: newClass.academic_year,
          school_id: selectedSchool.id,
        });

      if (error) throw error;

      setIsAddingClass(false);
      setNewClass({
        name: "",
        level: "",
        academic_year: new Date().getFullYear().toString(),
      });
      refetch();
      toast({
        title: "Succès",
        description: "La classe a été ajoutée avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout de la classe",
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notes et Classes</h1>
            <p className="text-gray-600">Gérez les classes et les notes des élèves</p>
          </div>
          <Dialog open={isAddingClass} onOpenChange={setIsAddingClass}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter une classe
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter une nouvelle classe</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom de la classe</Label>
                  <Input
                    id="name"
                    value={newClass.name}
                    onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Niveau</Label>
                  <Input
                    id="level"
                    type="number"
                    value={newClass.level}
                    onChange={(e) => setNewClass({ ...newClass, level: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="academic_year">Année académique</Label>
                  <Input
                    id="academic_year"
                    value={newClass.academic_year}
                    onChange={(e) => setNewClass({ ...newClass, academic_year: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddClass} className="w-full">
                  Ajouter
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes?.map((classItem) => (
            <Card key={classItem.id}>
              <CardHeader>
                <CardTitle>{classItem.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Niveau: {classItem.level}</p>
                <p className="text-gray-600">Année: {classItem.academic_year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GradesAndClasses;