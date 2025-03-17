import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "@/components/core/navigation/Sidebar";
import Navbar from "@/components/core/navigation/Navbar";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function DashboardLayout({
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
