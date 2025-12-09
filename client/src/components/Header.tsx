import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOut, Bell } from "lucide-react";
import { studentData } from "@/lib/mockData";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-3 border-b border-border bg-background sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <span className="text-sm font-medium hidden sm:inline">Welcome back, {studentData.name.split(' ')[0]}</span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative" data-testid="button-notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
        </Button>
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={studentData.photo} alt={studentData.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              {studentData.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex gap-2"
            onClick={() => console.log('Logout clicked')}
            data-testid="button-header-logout"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
