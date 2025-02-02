import { Layout } from "@/components/Layout";
import { useSchool } from "@/contexts/SchoolContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CyclesAndTerms = () => {
  const { selectedSchool } = useSchool();

  if (!selectedSchool) {
    return (
      <Layout>
        <div className="container py-8">
          <h1>Veuillez d'abord sélectionner une école</h1>
        </div>
      </Layout>
    );
  }

  const cycles = [
    {
      name: "Premier Cycle",
      terms: ["Premier Trimestre", "Deuxième Trimestre", "Troisième Trimestre"],
    },
    {
      name: "Second Cycle",
      terms: ["Premier Trimestre", "Deuxième Trimestre", "Troisième Trimestre"],
    },
  ];

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cycles et Trimestres</h1>
          <p className="text-gray-600">Gérez les cycles et trimestres de votre établissement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cycles.map((cycle, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{cycle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {cycle.terms.map((term, termIndex) => (
                    <li key={termIndex} className="text-gray-600">
                      {term}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CyclesAndTerms;