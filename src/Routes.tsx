import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import ManageStaff from "./pages/ManageStaff";
import ManageSchool from "./pages/ManageSchool";
import ManageCurriculum from "./pages/ManageCurriculum";
import OnlineTraining from "./pages/OnlineTraining";
import ParentPortal from "./pages/ParentPortal";
import SchoolProfile from "./pages/school/SchoolProfile";
import SchoolCalendar from "./pages/school/SchoolCalendar";
import GradesAndClasses from "./pages/school/GradesAndClasses";
import SchoolSubjects from "./pages/school/SchoolSubjects";
import CyclesAndTerms from "./pages/school/CyclesAndTerms";
import Attendance from "./pages/school/Attendance";
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
    path: "/student-info",
    element: <StudentProfile />,
  },
  {
    path: "/student-status",
    element: <StudentAcademic />,
  },
  {
    path: "/student-level",
    element: <StudentProgress />,
  },
  {
    path: "/student-coordinates",
    element: <StudentSchool />,
  },
  {
    path: "/student-emergency",
    element: <StudentMentor />,
  },
  {
    path: "/student-overview",
    element: <StudentProfile />,
  },
  {
    path: "/student-courses",
    element: <StudentProgram />,
  },
  {
    path: "/student-performance",
    element: <StudentAcademic />,
  },
  {
    path: "/student-attendance",
    element: <StudentAttendance />,
  },
  {
    path: "/manage-staff",
    element: <ManageStaff />,
  },
  {
    path: "/manage-staff/add",
    element: <ManageStaff />,
  },
  {
    path: "/manage-staff/planning",
    element: <ManageStaff />,
  },
  {
    path: "/manage-school",
    element: <ManageSchool />,
  },
  {
    path: "/school/profile",
    element: <SchoolProfile />,
  },
  {
    path: "/school/calendar",
    element: <SchoolCalendar />,
  },
  {
    path: "/school/grades-and-classes",
    element: <GradesAndClasses />,
  },
  {
    path: "/school/subjects",
    element: <SchoolSubjects />,
  },
  {
    path: "/school/cycles-and-terms",
    element: <CyclesAndTerms />,
  },
  {
    path: "/school/attendance",
    element: <Attendance />,
  },
  {
    path: "/manage-curriculum",
    element: <ManageCurriculum />,
  },
  {
    path: "/manage-curriculum/programs",
    element: <ManageCurriculum />,
  },
  {
    path: "/manage-curriculum/assessments",
    element: <ManageCurriculum />,
  },
  {
    path: "/online-training",
    element: <OnlineTraining />,
  },
  {
    path: "/online-training/my-courses",
    element: <OnlineTraining />,
  },
  {
    path: "/online-training/certificates",
    element: <OnlineTraining />,
  },
  {
    path: "/parent-portal",
    element: <ParentPortal />,
  },
  {
    path: "/parent-portal/communications",
    element: <ParentPortal />,
  },
  {
    path: "/parent-portal/appointments",
    element: <ParentPortal />,
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

export default router;