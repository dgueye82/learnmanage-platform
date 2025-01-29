import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calendar, ClipboardCheck, GraduationCap, Book, Clock, FileText, ChartBar, Users } from "lucide-react";

const ManageCurriculum = () => {
  const modules = [
    {
      title: "Planification du programme",
      description: "Gestion et planification du programme scolaire",
      icon: Calendar,
    },
    {
      title: "Gestion du programme",
      description: "Administration et suivi du programme d'études",
      icon: Book,
    },
    {
      title: "Plan d'enseignement annuel",
      description: "Gestion du plan d'enseignement sur l'année",
      icon: BookOpen,
    },
    {
      title: "Planification des cours",
      description: "Organisation et planification des sessions de cours",
      icon: Clock,
    },
    {
      title: "Matériel pédagogique (LTSM)",
      description: "Gestion du matériel de soutien à l'apprentissage",
      icon: GraduationCap,
    },
    {
      title: "Gestion des horaires",
      description: "Organisation des emplois du temps",
      icon: Calendar,
    },
    {
      title: "Évaluations",
      description: "Élaboration et gestion des évaluations",
      icon: ClipboardCheck,
    },
    {
      title: "Rapports d'évaluation",
      description: "Notation et rapports d'évaluation des apprenants",
      icon: FileText,
    },
    {
      title: "Suivi des progrès",
      description: "Gestion des rapports de progrès des apprenants",
      icon: ChartBar,
    },
    {
      title: "Soutien aux apprenants",
      description: "Planification des interventions et du soutien",
      icon: Users,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Programme d'études et évaluation</h1>
          <p className="text-gray-600">
            Le module de programme et d'évaluation est un élément essentiel conçu pour gérer et suivre le programme scolaire, 
            le matériel pédagogique et les évaluations des apprenants.
          </p>
          <p className="text-gray-600 mt-2">
            Son objectif est de fournir des outils et des fonctionnalités qui soutiennent la planification, 
            la diffusion et l'évaluation du contenu du programme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <module.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
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

export default ManageCurriculum;