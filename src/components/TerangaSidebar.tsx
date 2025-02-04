import { Home, School, User, Users, BookOpen, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useStudent } from "@/contexts/StudentContext";

const getMenuItems = (studentId: string | null) => [
  {
    title: "Accueil",
    icon: Home,
    path: "/",
  },
  {
    title: "Gérer l'école",
    icon: School,
    path: "/manage-school",
    subItems: [
      {
        title: "Profil",
        path: "/school/profile",
      },
      {
        title: "Calendrier",
        path: "/school/calendar",
      },
      {
        title: "Classes",
        path: "/school/grades-and-classes",
      },
      {
        title: "Matières",
        path: "/school/subjects",
      },
      {
        title: "Cycles et Trimestres",
        path: "/school/cycles-and-terms",
      },
      {
        title: "Présence",
        path: "/school/attendance",
      },
    ],
  },
  {
    title: "Gérer l'élève",
    icon: User,
    path: "/manage-student",
    subItems: [
      {
        title: "Profil",
        path: studentId ? `/student/${studentId}/profile` : "/manage-student",
      },
      {
        title: "Académique",
        path: studentId ? `/student/${studentId}/academic` : "/manage-student",
      },
      {
        title: "Progrès",
        path: studentId ? `/student/${studentId}/progress` : "/manage-student",
      },
      {
        title: "Présence",
        path: studentId ? `/student/${studentId}/attendance` : "/manage-student",
      },
      {
        title: "Mérites",
        path: studentId ? `/student/${studentId}/merits` : "/manage-student",
      },
      {
        title: "Programme",
        path: studentId ? `/student/${studentId}/program` : "/manage-student",
      },
      {
        title: "École",
        path: studentId ? `/student/${studentId}/school` : "/manage-student",
      },
      {
        title: "Activités",
        path: studentId ? `/student/${studentId}/activities` : "/manage-student",
      },
      {
        title: "Mentor",
        path: studentId ? `/student/${studentId}/mentor` : "/manage-student",
      },
      {
        title: "Détentions",
        path: studentId ? `/student/${studentId}/detentions` : "/manage-student",
      },
    ],
  },
  {
    title: "Gérer le personnel",
    icon: Users,
    path: "/manage-staff",
  },
  {
    title: "Formation en ligne",
    icon: BookOpen,
    path: "/online-training",
  },
  {
    title: "Programme d'études et évaluation",
    icon: GraduationCap,
    path: "/manage-curriculum",
  },
  {
    title: "Portails parents",
    icon: Users,
    path: "/parent-portal",
  },
];

export function TerangaSidebar() {
  const location = useLocation();
  const { selectedStudentId } = useStudent();
  const isStudentRoute = location.pathname.includes('/student/');
  const isManageStudentRoute = location.pathname === '/manage-student';
  const isSchoolRoute = location.pathname.includes('/school/');
  const isManageSchoolRoute = location.pathname === '/manage-school';
  
  const menuItems = getMenuItems(selectedStudentId);

  const shouldShowSubItems = (item: any) => {
    if (item.path === '/manage-student') {
      return isStudentRoute || isManageStudentRoute;
    }
    if (item.path === '/manage-school') {
      return isSchoolRoute || isManageSchoolRoute;
    }
    return false;
  };

  const isActiveMenuItem = (item: any) => {
    if (item.path === '/manage-student') {
      return isStudentRoute || isManageStudentRoute;
    }
    if (item.path === '/manage-school') {
      return isSchoolRoute || isManageSchoolRoute;
    }
    return location.pathname === item.path;
  };

  return (
    <div className="min-h-screen w-64 bg-terangablue-50 border-r border-terangablue-100 p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-terangablue-600">TERANGA EDU</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-terangablue-100 transition-colors ${
                  isActiveMenuItem(item) ? 'bg-terangablue-100' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
              {item.subItems && shouldShowSubItems(item) && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem: any) => (
                    <li key={subItem.path}>
                      <Link
                        to={subItem.path}
                        className={`block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-terangablue-100 transition-colors ${
                          location.pathname === subItem.path ? 'bg-terangablue-100' : ''
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}