
import { StudentSidebar } from "./StudentSidebar";
import { StudentNavbar } from "./StudentNavbar";

interface StudentLayoutProps {
  children: React.ReactNode;
}

export function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <StudentSidebar />
        <div className="flex-1 ml-64">
          <StudentNavbar />
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
