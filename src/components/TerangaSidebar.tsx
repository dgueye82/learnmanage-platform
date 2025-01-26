import { School, User, Users, BookOpen, GraduationCap, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "À propos",
    icon: Heart,
    path: "/about",
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
                className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-terangablue-100 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}