import { Layout } from "@/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

const features = [
  {
    icon: Video,
    title: "Accès aux cours et ressources numériques",
    description: "Vidéos, PDF, quiz interactifs et plus encore",
  },
  {
    icon: FileText,
    title: "Gestion des devoirs et examens en ligne",
    description: "Soumission et suivi des travaux en ligne",
  },
  {
    icon: MessageSquare,
    title: "Discussions en temps réel",
    description: "Forums et chats avec les enseignants",
  },
  {
    icon: BarChart,
    title: "Suivi des performances",
    description: "Rapports détaillés de progression",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Alertes pour les tâches et cours à venir",
  },
  {
    icon: Tablet,
    title: "Accès multi-appareils",
    description: "Compatible ordinateur, tablette, téléphone",
  },
  {
    icon: VideoIcon,
    title: "Outils pour cours synchrones et asynchrones",
    description: "Visioconférence et contenu à la demande",
  },
  {
    icon: Award,
    title: "Certification numérique",
    description: "Badges pour la réussite des modules",
  },
];

const OnlineTraining = () => {
  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Formation en ligne</h1>
          <p className="text-gray-600 mb-6">
            Ce module est conçu pour offrir une plateforme interactive permettant aux élèves d'accéder à des cours en ligne, réaliser des exercices et interagir avec leurs enseignants.
          </p>
          <p className="text-gray-600">
            Il vise à faciliter l'apprentissage à distance, l'autonomie des élèves, et le suivi de leurs progrès en temps réel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OnlineTraining;