import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { SchoolProvider } from "./contexts/SchoolContext";
import { StudentProvider } from "./contexts/StudentContext";
import { Routes } from "./Routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <SchoolProvider>
          <StudentProvider>
            <Routes />
            <Toaster />
          </StudentProvider>
        </SchoolProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;