import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, FileText, Calendar, Clock, BookOpen, Users, ChartBar, Activity, UserCheck } from "lucide-react";

const ManageStaff = () => {
  const modules = [
    {
      title: "Dossiers du personnel",
      description: "Gestion des informations personnelles, qualifications, médicales, coordonnées, paie et antécédents professionnels",
      icon: FileText,
    },
    {
      title: "Congés du personnel",
      description: "Gestion et suivi des congés et absences du personnel",
      icon: Calendar,
    },
    {
      title: "Présence du personnel",
      description: "Suivi et gestion de la présence du personnel",
      icon: UserCheck,
    },
    {
      title: "Carrière du personnel",
      description: "Gestion de l'évolution professionnelle et des promotions",
      icon: Users,
    },
    {
      title: "Horaires de cours",
      description: "Gestion des emplois du temps et planning des cours",
      icon: Clock,
    },
    {
      title: "Formation professionnelle",
      description: "Formation et développement des compétences du personnel",
      icon: BookOpen,
    },
    {
      title: "Évaluation et performance",
      description: "Suivi et gestion du rendement du personnel",
      icon: ChartBar,
    },
    {
      title: "Activités extra-muros",
      description: "Gestion des activités hors temps scolaire",
      icon: Activity,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion du Personnel</h1>
          <p className="text-gray-600">
            Le module du personnel est un élément essentiel conçu pour gérer tous les aspects de la gestion du personnel au sein de l'école.
            Son objectif est de rationaliser les processus RH, de tenir à jour les dossiers des employés et de garantir que le personnel
            de l'école est géré efficacement.
          </p>
          <p className="text-gray-600 mt-2">
            Il contribue à créer un environnement de travail efficace et productif pour le personnel, dans le respect des lois et
            réglementations du travail, contribuant ainsi au succès global et au bien-être du personnel de l'école.
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

export default ManageStaff;