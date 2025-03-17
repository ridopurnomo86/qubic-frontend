import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "@/components/core/Sidebar";
import Navbar from "@/components/core/Navbar";

export default async function UserDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        <Navbar />
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
