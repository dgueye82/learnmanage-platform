
import { User, UserCheck, ArrowUp, MapPin, Phone } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export function StudentSidebar() {
  const location = useLocation();
  const { studentId } = useParams();

  const studentMenuItems = [
    {
      title: "Renseignements personnels",
      icon: User,
      path: `/student/${studentId}/personal-info`,
    },
    {
      title: "Étudiant",
      icon: UserCheck,
      path: `/student/${studentId}/status`,
    },
    {
      title: "Niveau",
      icon: ArrowUp,
      path: `/student/${studentId}/level`,
    },
    {
      title: "Coordonnées",
      icon: MapPin,
      path: `/student/${studentId}/contact`,
    },
    {
      title: "Contact d'urgence",
      icon: Phone,
      path: `/student/${studentId}/emergency`,
    },
  ];

  return (
    <div className="min-h-screen w-64 bg-gray-50 border-r border-gray-200 p-4 fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <span className="mr-1">Modifier</span>
          </button>
        </div>
      </div>
      <div className="mb-4">
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
          <span className="mr-2">+</span>
          <span>Ajouter un tuteur</span>
        </button>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Numéro d'étudiant : #00004</p>
      </div>
      <nav>
        <ul className="space-y-1">
          {studentMenuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors",
                  location.pathname === item.path 
                    ? "bg-gray-100 text-gray-900" 
                    : "text-gray-600"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
