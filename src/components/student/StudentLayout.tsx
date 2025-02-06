import { StudentSidebar } from "./StudentSidebar";
import { StudentNavbar } from "./StudentNavbar";

interface StudentLayoutProps {
  children: React.ReactNode;
}

export function StudentLayout({ children }: StudentLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentSidebar />
      <div className="pl-64">
        <StudentNavbar />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}