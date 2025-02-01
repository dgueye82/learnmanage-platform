import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SchoolProvider } from "@/contexts/SchoolContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import ManageSchool from "./pages/ManageSchool";
import ManageStudent from "./pages/ManageStudent";
import ManageStaff from "./pages/ManageStaff";
import ManageCurriculum from "./pages/ManageCurriculum";
import OnlineTraining from "./pages/OnlineTraining";
import ParentPortal from "./pages/ParentPortal";
import SchoolRegistration from "./pages/SchoolRegistration";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SchoolProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/about" element={<Index />} />
            <Route path="/manage-school" element={<ManageSchool />} />
            <Route path="/manage-student" element={<ManageStudent />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path="/manage-curriculum" element={<ManageCurriculum />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/curriculum" element={<ManageCurriculum />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/school-registration" element={<SchoolRegistration />} />
          </Routes>
        </BrowserRouter>
      </SchoolProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;