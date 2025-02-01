import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, CalendarDays, BookOpen, ClipboardCheck, Users, GraduationCap, UserCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { useSchool } from "@/contexts/SchoolContext";
import { Button } from "@/components/ui/button";

const ManageSchool = () => {
  const { data: schools, isLoading } = useQuery({
    queryKey: ['schools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('schools')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  const { selectedSchool, setSelectedSchool } = useSchool();

  const modules = [
    {
      title: "Profil de l'école",
      description: "Gérer les informations et le profil de l'établissement",
      icon: School,
    },
    {
      title: "Notes et Classes",
      description: "Gestion des notes et organisation des classes",
      icon: ClipboardCheck,
    },
    {
      title: "Calendrier Scolaire",
      description: "Planification et gestion du calendrier académique",
      icon: CalendarDays,
    },
    {
      title: "Cycles et Trimestres",
      description: "Organisation des périodes scolaires",
      icon: GraduationCap,
    },
    {
      title: "Matières Scolaires",
      description: "Gestion du programme et des matières enseignées",
      icon: BookOpen,
    },
    {
      title: "Présence",
      description: "Suivi des présences des élèves et du personnel",
      icon: UserCheck,
    },
    {
      title: "Gestion des Parents",
      description: "Communication et suivi avec les parents d'élèves",
      icon: Users,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Gestion de l'École</h1>
          
          {/* Sélection de l'école */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sélectionnez une école</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isLoading ? (
                <p>Chargement des écoles...</p>
              ) : (
                schools?.map((school) => (
                  <Card 
                    key={school.id}
                    className={`cursor-pointer transition-all ${
                      selectedSchool?.id === school.id ? 'ring-2 ring-terangablue-500' : ''
                    }`}
                    onClick={() => setSelectedSchool(school)}
                  >
                    <CardHeader>
                      <CardTitle>{school.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{school.address}</p>
                      <p className="text-gray-600">{school.phone}</p>
                      <p className="text-gray-600">{school.email}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          {selectedSchool && (
            <>
              <p className="text-gray-600 mb-8">
                École sélectionnée : <span className="font-semibold">{selectedSchool.name}</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-terangablue-50 rounded-lg">
                          <module.icon className="w-6 h-6 text-terangablue-500" />
                        </div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        className="w-full"
                        variant="default"
                      >
                        Accéder
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ManageSchool;