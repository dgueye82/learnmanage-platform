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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;