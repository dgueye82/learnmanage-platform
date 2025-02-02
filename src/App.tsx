import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SchoolProvider } from "@/contexts/SchoolContext";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/Auth";
import ManageSchool from "./pages/ManageSchool";
import ManageStudent from "./pages/ManageStudent";
import ManageStaff from "./pages/ManageStaff";
import ManageCurriculum from "./pages/ManageCurriculum";
import OnlineTraining from "./pages/OnlineTraining";
import ParentPortal from "./pages/ParentPortal";
import SchoolRegistration from "./pages/SchoolRegistration";
import SchoolProfile from "./pages/school/SchoolProfile";
import GradesAndClasses from "./pages/school/GradesAndClasses";
import SchoolCalendar from "./pages/school/SchoolCalendar";
import CyclesAndTerms from "./pages/school/CyclesAndTerms";
import SchoolSubjects from "./pages/school/SchoolSubjects";
import Attendance from "./pages/school/Attendance";

// Student Management Routes
import StudentProfile from "./pages/student/StudentProfile";
import StudentAcademic from "./pages/student/StudentAcademic";
import StudentProgress from "./pages/student/StudentProgress";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentMerits from "./pages/student/StudentMerits";
import StudentProgram from "./pages/student/StudentProgram";
import StudentSchool from "./pages/student/StudentSchool";
import StudentActivities from "./pages/student/StudentActivities";
import StudentMentor from "./pages/student/StudentMentor";
import StudentDetentions from "./pages/student/StudentDetentions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SchoolProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/manage-school" element={<ManageSchool />} />
            <Route path="/manage-student" element={<ManageStudent />} />
            <Route path="/manage-staff" element={<ManageStaff />} />
            <Route path="/manage-curriculum" element={<ManageCurriculum />} />
            <Route path="/online-training" element={<OnlineTraining />} />
            <Route path="/curriculum" element={<ManageCurriculum />} />
            <Route path="/parent-portal" element={<ParentPortal />} />
            <Route path="/school-registration" element={<SchoolRegistration />} />
            
            {/* School Management Routes */}
            <Route path="/school/profile" element={<SchoolProfile />} />
            <Route path="/school/grades-classes" element={<GradesAndClasses />} />
            <Route path="/school/calendar" element={<SchoolCalendar />} />
            <Route path="/school/cycles-terms" element={<CyclesAndTerms />} />
            <Route path="/school/subjects" element={<SchoolSubjects />} />
            <Route path="/school/attendance" element={<Attendance />} />

            {/* Student Management Routes */}
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/academic" element={<StudentAcademic />} />
            <Route path="/student/progress" element={<StudentProgress />} />
            <Route path="/student/attendance" element={<StudentAttendance />} />
            <Route path="/student/merits" element={<StudentMerits />} />
            <Route path="/student/program" element={<StudentProgram />} />
            <Route path="/student/school" element={<StudentSchool />} />
            <Route path="/student/activities" element={<StudentActivities />} />
            <Route path="/student/mentor" element={<StudentMentor />} />
            <Route path="/student/detentions" element={<StudentDetentions />} />
          </Routes>
        </BrowserRouter>
      </SchoolProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;