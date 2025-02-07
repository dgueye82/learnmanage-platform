
import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ManageStudent from "./pages/ManageStudent";
import StudentOverview from "./pages/student/StudentOverview";

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
    path: "/student/:studentId/overview",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/courses",
    element: <StudentOverview />, // We'll create these components later
  },
  {
    path: "/student/:studentId/performance",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/attendance",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/financial",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/remarks",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/calendar",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/files",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/personal-info",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/status",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/level",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/contact",
    element: <StudentOverview />,
  },
  {
    path: "/student/:studentId/emergency",
    element: <StudentOverview />,
  }
]);
