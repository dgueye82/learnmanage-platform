import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ManageSchool from "./pages/ManageSchool";
import ManageStudent from "./pages/ManageStudent";
import ManageStaff from "./pages/ManageStaff";
import ManageCurriculum from "./pages/ManageCurriculum";
import OnlineTraining from "./pages/OnlineTraining";
import ParentPortal from "./pages/ParentPortal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/manage-school" element={<ManageSchool />} />
          <Route path="/manage-student" element={<ManageStudent />} />
          <Route path="/manage-staff" element={<ManageStaff />} />
          <Route path="/manage-curriculum" element={<ManageCurriculum />} />
          <Route path="/online-training" element={<OnlineTraining />} />
          <Route path="/curriculum" element={<ManageCurriculum />} />
          <Route path="/parent-portal" element={<ParentPortal />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;