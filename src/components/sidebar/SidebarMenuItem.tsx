
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuItem } from "./types";

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  showSubItems: boolean;
  currentPath: string;
}

export function SidebarMenuItem({ item, isActive, showSubItems, currentPath }: SidebarMenuItemProps) {
  return (
    <li>
      <Link
        to={item.path}
        className={cn(
          "flex items-center justify-between px-4 py-2 text-gray-700 rounded-lg hover:bg-terangablue-100 transition-colors",
          isActive && "bg-terangablue-100"
        )}
      >
        <div className="flex items-center gap-3">
          <item.icon className="w-5 h-5" />
          <span>{item.title}</span>
        </div>
        {item.subItems && (
          <ChevronDown 
            className={cn(
              "w-4 h-4 transition-transform",
              showSubItems && "transform rotate-180"
            )} 
          />
        )}
      </Link>
      {item.subItems && showSubItems && (
        <ul className="ml-8 mt-2 space-y-1">
          {item.subItems.map((subItem) => (
            <li key={subItem.path}>
              <Link
                to={subItem.path}
                className={cn(
                  "block px-4 py-2 text-sm text-gray-600 rounded-lg hover:bg-terangablue-100 transition-colors",
                  currentPath === subItem.path && "bg-terangablue-100"
                )}
              >
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
