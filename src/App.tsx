import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SchoolProvider } from "./contexts/SchoolContext";
import { StudentProvider } from "./contexts/StudentContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SchoolProvider>
        <StudentProvider>
          <RouterProvider router={router} />
          <Toaster />
        </StudentProvider>
      </SchoolProvider>
    </QueryClientProvider>
  );
}

export default App;