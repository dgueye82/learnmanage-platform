import { Eye, BookOpen, ChartBar, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  {
    title: "Aperçu",
    icon: Eye,
    path: "/student-overview",
  },
  {
    title: "Cours",
    icon: BookOpen,
    path: "/student-courses",
  },
  {
    title: "Performance",
    icon: ChartBar,
    path: "/student-performance",
    description: "Carnets de notes, bulletins de notes, résultats",
  },
  {
    title: "Présence",
    icon: Calendar,
    path: "/student-attendance",
    statuses: [
      { label: "Présent", color: "text-green-500" },
      { label: "Absence injustifiée", color: "text-red-500" },
      { label: "Absence justifiée", color: "text-red-500" },
      { label: "Expulsion", color: "text-red-500" },
      { label: "En retard", color: "text-orange-500" },
      { label: "Indéterminé", color: "text-gray-500" },
    ],
  },
];

export function StudentNavbar() {
  const location = useLocation();

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center px-4 sticky top-0 z-10">
      <nav className="flex space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors",
              location.pathname === item.path && "bg-gray-100"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}