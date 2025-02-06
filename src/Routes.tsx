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
]);
