import { Layout } from "@/components/Layout";
import { useSchool } from "@/contexts/SchoolContext";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SchoolProfile = () => {
  const { selectedSchool, setSelectedSchool } = useSchool();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: selectedSchool?.name || "",
    address: selectedSchool?.address || "",
    phone: selectedSchool?.phone || "",
    email: selectedSchool?.email || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSchool) return;

    try {
      const { data, error } = await supabase
        .from('schools')
        .update(formData)
        .eq('id', selectedSchool.id)
        .select()
        .single();

      if (error) throw error;

      setSelectedSchool(data);
      setIsEditing(false);
      toast({
        title: "Succès",
        description: "Les informations de l'école ont été mises à jour",
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la mise à jour",
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil de l'École</h1>
          <p className="text-gray-600">Gérez les informations de votre établissement</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informations de l'école</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom de l'école</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!isEditing}
                />
              </div>

              <div className="flex justify-end space-x-4">
                {isEditing ? (
                  <>
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                      Annuler
                    </Button>
                    <Button type="submit">Enregistrer</Button>
                  </>
                ) : (
                  <Button type="button" onClick={() => setIsEditing(true)}>
                    Modifier
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SchoolProfile;