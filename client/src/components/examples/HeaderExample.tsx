import { SidebarProvider } from "@/components/ui/sidebar";
import Header from '../Header';

export default function HeaderExample() {
  return (
    <SidebarProvider>
      <div className="w-full">
        <Header />
      </div>
    </SidebarProvider>
  );
}
