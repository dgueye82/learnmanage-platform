import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { School, Users, GraduationCap, BookOpen } from "lucide-react";

export default function Dashboard() {
  const { data: schools, isLoading: isLoadingSchools } = useQuery({
    queryKey: ['schools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('schools')
        .select('*');
      if (error) throw error;
      return data;
    },
  });

  const { data: students, isLoading: isLoadingStudents } = useQuery({
    queryKey: ['students'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('students')
        .select('*');
      if (error) throw error;
      return data;
    },
  });

  const { data: teachers, isLoading: isLoadingTeachers } = useQuery({
    queryKey: ['teachers'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('teachers')
        .select('*');
      if (error) throw error;
      return data;
    },
  });

  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
        
        {/* Statistiques générales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Écoles Actives</CardTitle>
              <School className="h-4 w-4 text-terangablue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoadingSchools ? "..." : schools?.length || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Élèves</CardTitle>
              <Users className="h-4 w-4 text-terangablue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoadingStudents ? "..." : students?.length || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Enseignants</CardTitle>
              <GraduationCap className="h-4 w-4 text-terangablue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{isLoadingTeachers ? "..." : teachers?.length || 0}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Matières</CardTitle>
              <BookOpen className="h-4 w-4 text-terangablue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">-</div>
            </CardContent>
          </Card>
        </div>

        {/* Liste des écoles */}
        <Card>
          <CardHeader>
            <CardTitle>Écoles Actives</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {isLoadingSchools ? (
                <p>Chargement des écoles...</p>
              ) : (
                schools?.map((school) => (
                  <Card key={school.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{school.name}</h3>
                          <p className="text-sm text-gray-500">{school.address}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">{school.email}</p>
                          <p className="text-sm text-gray-500">{school.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}