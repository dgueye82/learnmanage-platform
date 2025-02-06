import { User, UserCheck, ArrowUp, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const studentMenuItems = [
  {
    title: "Renseignements personnels",
    icon: User,
    path: "/student-info",
  },
  {
    title: "Étudiant",
    icon: UserCheck,
    path: "/student-status",
  },
  {
    title: "Niveau",
    icon: ArrowUp,
    path: "/student-level",
  },
  {
    title: "Coordonnées",
    icon: MapPin,
    path: "/student-coordinates",
  },
  {
    title: "Contact d'urgence",
    icon: Phone,
    path: "/student-emergency",
  },
];

export function StudentSidebar() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-64 bg-terangablue-50 border-r border-terangablue-100 p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-terangablue-600">Gestion Élève</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {studentMenuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-2 text-gray-700 rounded-lg hover:bg-terangablue-100 transition-colors",
                  location.pathname === item.path && "bg-terangablue-100"
                )}
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