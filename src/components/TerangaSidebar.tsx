
import { useLocation } from "react-router-dom";
import { useStudent } from "@/contexts/StudentContext";
import { SidebarMenuItem } from "./sidebar/SidebarMenuItem";
import { getMenuItems } from "./sidebar/menuItems";

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
    return location.pathname.startsWith(item.path);
  };

  const isActiveMenuItem = (item: any) => {
    if (item.path === '/manage-student') {
      return isStudentRoute || isManageStudentRoute;
    }
    if (item.path === '/manage-school') {
      return isSchoolRoute || isManageSchoolRoute;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="min-h-screen w-64 bg-terangablue-50 border-r border-terangablue-100 p-4 fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-terangablue-600">TERANGA EDU</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <SidebarMenuItem
              key={item.path}
              item={item}
              isActive={isActiveMenuItem(item)}
              showSubItems={shouldShowSubItems(item)}
              currentPath={location.pathname}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
