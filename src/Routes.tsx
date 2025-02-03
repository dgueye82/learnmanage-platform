import { Routes as RouterRoutes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import ManageStaff from "./pages/ManageStaff";
import ManageSchool from "./pages/ManageSchool";
import ManageCurriculum from "./pages/ManageCurriculum";
import OnlineTraining from "./pages/OnlineTraining";
import ParentPortal from "./pages/ParentPortal";
import Auth from "./pages/Auth";
import SchoolRegistration from "./pages/SchoolRegistration";

// School Management Routes
import SchoolProfile from "./pages/school/SchoolProfile";
import SchoolCalendar from "./pages/school/SchoolCalendar";
import GradesAndClasses from "./pages/school/GradesAndClasses";
import SchoolSubjects from "./pages/school/SchoolSubjects";
import CyclesAndTerms from "./pages/school/CyclesAndTerms";
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

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/school-registration" element={<SchoolRegistration />} />
      
      {/* Main Management Routes */}
      <Route path="/manage-student" element={<ManageStudent />} />
      <Route path="/manage-staff" element={<ManageStaff />} />
      <Route path="/manage-school" element={<ManageSchool />} />
      <Route path="/manage-curriculum" element={<ManageCurriculum />} />
      <Route path="/online-training" element={<OnlineTraining />} />
      <Route path="/parent-portal" element={<ParentPortal />} />

      {/* School Management Routes */}
      <Route path="/school/profile" element={<SchoolProfile />} />
      <Route path="/school/calendar" element={<SchoolCalendar />} />
      <Route path="/school/grades-and-classes" element={<GradesAndClasses />} />
      <Route path="/school/subjects" element={<SchoolSubjects />} />
      <Route path="/school/cycles-and-terms" element={<CyclesAndTerms />} />
      <Route path="/school/attendance" element={<Attendance />} />

      {/* Student Management Routes */}
      <Route path="/student/:studentId/profile" element={<StudentProfile />} />
      <Route path="/student/:studentId/academic" element={<StudentAcademic />} />
      <Route path="/student/:studentId/progress" element={<StudentProgress />} />
      <Route path="/student/:studentId/attendance" element={<StudentAttendance />} />
      <Route path="/student/:studentId/merits" element={<StudentMerits />} />
      <Route path="/student/:studentId/program" element={<StudentProgram />} />
      <Route path="/student/:studentId/school" element={<StudentSchool />} />
      <Route path="/student/:studentId/activities" element={<StudentActivities />} />
      <Route path="/student/:studentId/mentor" element={<StudentMentor />} />
      <Route path="/student/:studentId/detentions" element={<StudentDetentions />} />
    </RouterRoutes>
  );
}