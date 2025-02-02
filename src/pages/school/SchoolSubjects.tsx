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
import { Textarea } from "@/components/ui/textarea";

const SchoolSubjects = () => {
  const { selectedSchool } = useSchool();
  const { toast } = useToast();
  const [isAddingSubject, setIsAddingSubject] = useState(false);
  const [newSubject, setNewSubject] = useState({
    name: "",
    description: "",
  });

  const { data: subjects, refetch } = useQuery({
    queryKey: ['subjects', selectedSchool?.id],
    queryFn: async () => {
      if (!selectedSchool?.id) return [];
      const { data, error } = await supabase
        .from('subjects')
        .select('*')
        .eq('school_id', selectedSchool.id);
      
      if (error) throw error;
      return data;
    },
    enabled: !!selectedSchool?.id,
  });

  const handleAddSubject = async () => {
    if (!selectedSchool) return;

    try {
      const { error } = await supabase
        .from('subjects')
        .insert({
          name: newSubject.name,
          description: newSubject.description,
          school_id: selectedSchool.id,
        });

      if (error) throw error;

      setIsAddingSubject(false);
      setNewSubject({
        name: "",
        description: "",
      });
      refetch();
      toast({
        title: "Succès",
        description: "La matière a été ajoutée avec succès",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'ajout de la matière",
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Matières Scolaires</h1>
            <p className="text-gray-600">Gérez les matières enseignées dans votre établissement</p>
          </div>
          <Dialog open={isAddingSubject} onOpenChange={setIsAddingSubject}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter une matière
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ajouter une nouvelle matière</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom de la matière</Label>
                  <Input
                    id="name"
                    value={newSubject.name}
                    onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newSubject.description}
                    onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })}
                  />
                </div>
                <Button onClick={handleAddSubject} className="w-full">
                  Ajouter
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects?.map((subject) => (
            <Card key={subject.id}>
              <CardHeader>
                <CardTitle>{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{subject.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SchoolSubjects;