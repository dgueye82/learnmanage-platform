import { Layout } from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-terangablue-600 mb-4">TERANGA EDU</h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre portail numérique centralisé pour la gestion scolaire
            </p>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img
                src="/lovable-uploads/c7914668-31bc-4683-9f06-0b0bd8f5f53c.png"
                alt="Education Portal"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <h2 className="text-3xl font-bold mb-2">COMMENT ÇA MARCHE</h2>
                <p className="text-lg">
                  Découvrez notre plateforme intuitive de gestion scolaire
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;