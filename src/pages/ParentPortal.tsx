import { Layout } from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen, Clock, Award, DollarSign, MessageSquare } from "lucide-react";

const features = [
  {
    title: "Agenda",
    description: "Consultez l'horaire, les congés scolaires et même les retenues de vos enfants.",
    icon: Calendar,
  },
  {
    title: "Devoirs et leçons",
    description: "Liste en temps réel des devoirs et leçons pour un suivi constant.",
    icon: BookOpen,
  },
  {
    title: "Absences et retards",
    description: "Déclarez rapidement les absences ou retards de vos enfants via le portail.",
    icon: Clock,
  },
  {
    title: "Résultats scolaires",
    description: "Suivez les progrès scolaires et recevez des mises à jour régulières entre les bulletins.",
    icon: Award,
  },
  {
    title: "Finances",
    description: "Consultez vos états de compte liés à l'école ou au service de garde à tout moment.",
    icon: DollarSign,
  },
  {
    title: "Messages",
    description: "Recevez des communications importantes de l'école et communiquez avec les enseignants.",
    icon: MessageSquare,
  },
];

export default function ParentPortal() {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portail parents</h1>
          <p className="mt-2 text-lg text-gray-600">
            Ce module est conçu pour permettre aux parents de rester connectés à la vie scolaire de leurs enfants, où qu'ils soient et en tout temps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-terangablue-50 rounded-lg">
                    <feature.icon className="w-6 h-6 text-terangablue-500" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}