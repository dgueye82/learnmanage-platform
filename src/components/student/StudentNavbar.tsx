
import { Eye, BookOpen, ChartBar, Calendar, DollarSign, MessageSquare, CalendarDays, FileText } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { cn } from "@/lib/utils";

export function StudentNavbar() {
  const location = useLocation();
  const { studentId } = useParams();

  const navItems = [
    {
      title: "Aperçu",
      icon: Eye,
      path: `/student/${studentId}/overview`,
    },
    {
      title: "Cours",
      icon: BookOpen,
      path: `/student/${studentId}/courses`,
    },
    {
      title: "Performance",
      icon: ChartBar,
      path: `/student/${studentId}/performance`,
    },
    {
      title: "Présence",
      icon: Calendar,
      path: `/student/${studentId}/attendance`,
    },
    {
      title: "Financier",
      icon: DollarSign,
      path: `/student/${studentId}/financial`,
    },
    {
      title: "Remarques",
      icon: MessageSquare,
      path: `/student/${studentId}/remarks`,
    },
    {
      title: "Calendrier",
      icon: CalendarDays,
      path: `/student/${studentId}/calendar`,
    },
    {
      title: "Fichier",
      icon: FileText,
      path: `/student/${studentId}/files`,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Étudiants</span>
          <span className="text-sm text-gray-500">→</span>
          <span className="text-sm font-medium">Mamadou Ndiaye</span>
        </div>
      </div>
      <nav className="flex space-x-1 px-4 overflow-x-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 hover:border-gray-300 transition-colors",
              location.pathname === item.path 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
