import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BookOpen, Calendar, Award, Bus, UserCheck, School, Activity, UserCog, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ManageStudent = () => {
  const { toast } = useToast();

  const modules = [
    {
      title: "Profil de l'élève",
      description: "Gestion des informations personnelles, parentales/tutrices et médicales",
      icon: User,
      path: "/student/profile"
    },
    {
      title: "Gestion académique",
      description: "Horaires de cours, enseignants, matières, etc.",
      icon: BookOpen,
      path: "/student/academic"
    },
    {
      title: "Progrès de l'élève",
      description: "Gestion et reporting des progrès académiques",
      icon: Activity,
      path: "/student/progress"
    },
    {
      title: "Présence",
      description: "Suivi de la présence de l'élève",
      icon: UserCheck,
      path: "/student/attendance"
    },
    {
      title: "Mérites et démérites",
      description: "Gestion du comportement de l'élève",
      icon: Award,
      path: "/student/merits"
    },
    {
      title: "Programme de l'élève",
      description: "Nutrition, transport, résidence, etc.",
      icon: Bus,
      path: "/student/program"
    },
    {
      title: "École de l'élève",
      description: "Gestion des informations scolaires",
      icon: School,
      path: "/student/school"
    },
    {
      title: "Activités extra-muros",
      description: "Gestion des activités parascolaires",
      icon: Activity,
      path: "/student/activities"
    },
    {
      title: "Mentor de l'élève",
      description: "Gestion du mentorat et accompagnement",
      icon: UserCog,
      path: "/student/mentor"
    },
    {
      title: "Détentions",
      description: "Gestion des détentions des élèves",
      icon: AlertTriangle,
      path: "/student/detentions"
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion des Élèves</h1>
          <p className="text-gray-600">
            Vue d'ensemble et accès rapide à toutes les fonctionnalités de gestion des élèves
          </p>
        </div>

        {/* Modules */}
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
                <button 
                  onClick={() => {
                    toast({
                      title: "Navigation",
                      description: "Cette fonctionnalité sera bientôt disponible",
                    });
                  }}
                  className="w-full py-2 px-4 bg-terangablue-500 text-white rounded-lg hover:bg-terangablue-600 transition-colors"
                >
                  Accéder
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ManageStudent;