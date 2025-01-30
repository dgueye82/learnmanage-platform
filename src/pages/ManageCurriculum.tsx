import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar,
  BookOpen,
  ClipboardCheck,
  Book,
  Clock,
  FileText,
  ChartBar,
  Users,
  GraduationCap,
  ListTodo
} from "lucide-react";

const ManageCurriculum = () => {
  const modules = [
    {
      title: "Planification du programme",
      description: "Gestion et planification stratégique du programme scolaire",
      icon: Calendar,
    },
    {
      title: "Gestion du programme",
      description: "Administration et suivi du programme d'études",
      icon: Book,
    },
    {
      title: "Plan d'enseignement annuel",
      description: "Organisation et gestion du plan d'enseignement sur l'année",
      icon: BookOpen,
    },
    {
      title: "Planification des cours",
      description: "Organisation et planification détaillée des sessions de cours",
      icon: Clock,
    },
    {
      title: "Matériel pédagogique (LTSM)",
      description: "Gestion du matériel de soutien à l'apprentissage et à l'enseignement",
      icon: GraduationCap,
    },
    {
      title: "Gestion des horaires",
      description: "Organisation et planification des emplois du temps",
      icon: Calendar,
    },
    {
      title: "Élaboration des évaluations",
      description: "Création et gestion des évaluations des apprenants",
      icon: ClipboardCheck,
    },
    {
      title: "Rapports d'évaluation",
      description: "Gestion des notations et rapports d'évaluation des apprenants",
      icon: FileText,
    },
    {
      title: "Suivi des progrès",
      description: "Gestion et analyse des rapports de progrès des apprenants",
      icon: ChartBar,
    },
    {
      title: "Soutien aux apprenants",
      description: "Planification des interventions et du soutien personnalisé",
      icon: Users,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Programme d'études et évaluation</h1>
          <p className="text-gray-600 mb-2">
            Le module de programme et d'évaluation est un élément essentiel conçu pour gérer et suivre le programme scolaire, 
            le matériel pédagogique et les évaluations des apprenants.
          </p>
          <p className="text-gray-600">
            Son objectif est de fournir des outils et des fonctionnalités qui soutiennent la planification, 
            la diffusion et l'évaluation du contenu du programme. Il aide les enseignants à planifier et à diffuser 
            efficacement le programme scolaire, à évaluer les progrès des apprenants et à prendre des décisions 
            fondées sur des données.
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

export default ManageCurriculum;