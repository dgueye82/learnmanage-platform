import { Layout } from "@/components/Layout";
import { useSchool } from "@/contexts/SchoolContext";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const SchoolCalendar = () => {
  const { selectedSchool } = useSchool();
  const [date, setDate] = useState<Date | undefined>(new Date());

  if (!selectedSchool) {
    return (
      <Layout>
        <div className="container py-8">
          <h1>Veuillez d'abord sélectionner une école</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Calendrier Scolaire</h1>
          <p className="text-gray-600">Gérez le calendrier de votre établissement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Événements du jour</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Aucun événement prévu pour le {date?.toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolCalendar;