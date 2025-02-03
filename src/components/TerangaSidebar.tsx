import { Home, School, User, Users, BookOpen, GraduationCap, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Accueil",
    icon: Home,
    path: "/",
  },
  {
    title: "Gérer l'école",
    icon: School,
    path: "/manage-school",
  },
  {
    title: "Gérer l'élève",
    icon: User,
    path: "/manage-student",
    subItems: [
      {
        title: "Profil",
        path: "/student/profile",
      },
      {
        title: "Académique",
        path: "/student/academic",
      },
      {
        title: "Progrès",
        path: "/student/progress",
      },
      {
        title: "Présence",
        path: "/student/attendance",
      },
      {
        title: "Mérites",
        path: "/student/merits",
      },
      {
        title: "Programme",
        path: "/student/program",
      },
      {
        title: "École",
        path: "/student/school",
      },
      {
        title: "Activités",
        path: "/student/activities",
      },
      {
        title: "Mentor",
        path: "/student/mentor",
      },
      {
        title: "Détentions",
        path: "/student/detentions",
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
    path: "/curriculum",
  },
  {
    title: "Portails parents",
    icon: Users,
    path: "/parent-portal",
  },
];

export function TerangaSidebar() {
  const location = useLocation();
  const isStudentRoute = location.pathname.startsWith('/student/');
  const isManageStudentRoute = location.pathname === '/manage-student';

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
                  (location.pathname === item.path || 
                   (item.path === '/manage-student' && isStudentRoute)) 
                  ? 'bg-terangablue-100' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
              {item.subItems && (isManageStudentRoute || isStudentRoute) && (
                <ul className="ml-8 mt-2 space-y-1">
                  {item.subItems.map((subItem) => (
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