import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Bienvenue sur TERANGA EDU</h1>
              <Link to="/auth">
                <Button className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Connexion
                </Button>
              </Link>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Votre portail numérique centralisé pour la gestion scolaire au Sénégal
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h2 className="text-xl font-semibold text-blue-900 mb-2">Gestion des Écoles</h2>
                <p className="text-gray-600">Gérez efficacement vos établissements scolaires</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h2 className="text-xl font-semibold text-green-900 mb-2">Suivi des Élèves</h2>
                <p className="text-gray-600">Suivez les progrès et la présence des élèves</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-xl">
                <h2 className="text-xl font-semibold text-purple-900 mb-2">Portail Parents</h2>
                <p className="text-gray-600">Facilitez la communication avec les parents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;