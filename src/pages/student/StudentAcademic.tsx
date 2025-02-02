import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StudentAcademic = () => {
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Académique</h1>
          <p className="text-gray-600">
            Gérez les informations académiques de l'élève
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

export default StudentAcademic;