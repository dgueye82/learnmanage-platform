import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, BookOpen, Calendar, Award, Bus, UserCheck, School, Activity, UserCog, AlertTriangle } from "lucide-react";

const ManageStudent = () => {
  const modules = [
    {
      title: "Profil de l'élève",
      description: "Gestion des informations personnelles, parentales/tutrices et médicales",
      icon: User,
    },
    {
      title: "Gestion académique",
      description: "Horaires de cours, enseignants, matières, etc.",
      icon: BookOpen,
    },
    {
      title: "Progrès de l'élève",
      description: "Gestion et reporting des progrès académiques",
      icon: Activity,
    },
    {
      title: "Présence",
      description: "Suivi de la présence de l'élève",
      icon: UserCheck,
    },
    {
      title: "Mérites et démérites",
      description: "Gestion du comportement de l'élève",
      icon: Award,
    },
    {
      title: "Programme de l'élève",
      description: "Nutrition, transport, résidence, etc.",
      icon: Bus,
    },
    {
      title: "École de l'élève",
      description: "Gestion des informations scolaires",
      icon: School,
    },
    {
      title: "Activités extra-muros",
      description: "Gestion des activités parascolaires",
      icon: Activity,
    },
    {
      title: "Mentor de l'élève",
      description: "Gestion du mentorat et accompagnement",
      icon: UserCog,
    },
    {
      title: "Détentions",
      description: "Gestion des détentions des élèves",
      icon: AlertTriangle,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion de l'Élève</h1>
          <p className="text-gray-600">
            Le module d'apprentissage est conçu pour répondre spécifiquement aux besoins et aux exigences des apprenants.
            Il permet à l'école de jouer un rôle actif dans l'éducation et les réalisations des apprenants.
          </p>
        </div>

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
                <button className="w-full py-2 px-4 bg-terangablue-500 text-white rounded-lg hover:bg-terangablue-600 transition-colors">
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