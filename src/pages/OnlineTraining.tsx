import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  FileText,
  MessageSquare,
  Video,
  Clock,
  Award,
  Tablet,
  Bell,
  BarChart,
  Video as VideoIcon,
} from "lucide-react";

const OnlineTraining = () => {
  const modules = [
    {
      title: "Ressources numériques",
      description: "Vidéos, PDF, quiz interactifs et plus encore",
      icon: Video,
    },
    {
      title: "Devoirs et examens",
      description: "Soumission et suivi des travaux en ligne",
      icon: FileText,
    },
    {
      title: "Discussions en direct",
      description: "Forums et chats avec les enseignants",
      icon: MessageSquare,
    },
    {
      title: "Suivi des performances",
      description: "Rapports détaillés de progression",
      icon: BarChart,
    },
    {
      title: "Notifications",
      description: "Alertes pour les tâches et cours à venir",
      icon: Bell,
    },
    {
      title: "Accès multi-appareils",
      description: "Compatible ordinateur, tablette, téléphone",
      icon: Tablet,
    },
    {
      title: "Cours synchrones et asynchrones",
      description: "Visioconférence et contenu à la demande",
      icon: VideoIcon,
    },
    {
      title: "Certification numérique",
      description: "Badges pour la réussite des modules",
      icon: Award,
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Formation en ligne</h1>
          <p className="text-gray-600">
            Le module de formation en ligne est conçu pour offrir une plateforme interactive permettant aux élèves 
            d'accéder à des cours en ligne, réaliser des exercices et interagir avec leurs enseignants.
          </p>
          <p className="text-gray-600 mt-2">
            Il vise à faciliter l'apprentissage à distance, l'autonomie des élèves, et le suivi de leurs progrès en temps réel.
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

export default OnlineTraining;