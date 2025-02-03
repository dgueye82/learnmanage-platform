import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StudentFormProps {
  initialData?: {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth?: string;
  };
  mode: "create" | "edit";
}

export function StudentForm({ initialData, mode }: StudentFormProps) {
  const [firstName, setFirstName] = useState(initialData?.first_name || "");
  const [lastName, setLastName] = useState(initialData?.last_name || "");
  const [dateOfBirth, setDateOfBirth] = useState(initialData?.date_of_birth || "");
  const [isLoading, setIsLoading] = useState(false);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "create") {
        const { error } = await supabase
          .from("students")
          .insert([
            {
              first_name: firstName,
              last_name: lastName,
              date_of_birth: dateOfBirth || null,
            },
          ]);

        if (error) throw error;

        toast({
          title: "Succès",
          description: "L'élève a été ajouté avec succès",
        });
      } else {
        const { error } = await supabase
          .from("students")
          .update({
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth || null,
          })
          .eq("id", initialData?.id);

        if (error) throw error;

        toast({
          title: "Succès",
          description: "Les informations de l'élève ont été mises à jour",
        });
      }

      navigate("/manage-student");
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>
          {mode === "create" ? "Ajouter un élève" : "Modifier l'élève"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">Prénom</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nom</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date de naissance</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Chargement..." : mode === "create" ? "Ajouter" : "Modifier"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}