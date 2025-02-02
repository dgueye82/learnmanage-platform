import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const StudentProfile = () => {
  const { toast } = useToast();

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profil de l'Élève</h1>
          <p className="text-gray-600">
            Gérez les informations personnelles et les détails de l'élève
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>En cours de développement</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Cette fonctionnalité sera bientôt disponible.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default StudentProfile;