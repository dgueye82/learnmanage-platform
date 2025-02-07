
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import StudentOverview from "./pages/student/StudentOverview";
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
import ManageSchool from "./pages/ManageSchool";
import SchoolProfile from "./pages/school/SchoolProfile";
import SchoolCalendar from "./pages/school/SchoolCalendar";
import GradesAndClasses from "./pages/school/GradesAndClasses";
import SchoolSubjects from "./pages/school/SchoolSubjects";
import CyclesAndTerms from "./pages/school/CyclesAndTerms";
import Attendance from "./pages/school/Attendance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/manage-student",
    element: <ManageStudent />,
  },
  {
    path: "/manage-school",
    element: <ManageSchool />,
  },
  // School routes
  {
    path: "/school/profile",
    element: <SchoolProfile />,
  },
  {
    path: "/school/calendar",
    element: <SchoolCalendar />,
  },
  {
    path: "/school/grades-classes",
    element: <GradesAndClasses />,
  },
  {
    path: "/school/subjects",
    element: <SchoolSubjects />,
  },
  {
    path: "/school/cycles-terms",
    element: <CyclesAndTerms />,
  },
  {
    path: "/school/attendance",
    element: <Attendance />,
  },
  // Student routes
  {
    path: "/student/:studentId/overview",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/profile",
    element: <StudentProfile />,
  },
  {
    path: "/student/:studentId/academic",
    element: <StudentAcademic />,
  },
  {
    path: "/student/:studentId/progress",
    element: <StudentProgress />,
  },
  {
    path: "/student/:studentId/attendance",
    element: <StudentAttendance />,
  },
  {
    path: "/student/:studentId/merits",
    element: <StudentMerits />,
  },
  {
    path: "/student/:studentId/program",
    element: <StudentProgram />,
  },
  {
    path: "/student/:studentId/school",
    element: <StudentSchool />,
  },
  {
    path: "/student/:studentId/activities",
    element: <StudentActivities />,
  },
  {
    path: "/student/:studentId/mentor",
    element: <StudentMentor />,
  },
  {
    path: "/student/:studentId/detentions",
    element: <StudentDetentions />,
  },
]);
