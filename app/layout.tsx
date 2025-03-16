import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/core/AppSidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qubic Frontend",
  description: "Exam for Qubic",
};

const renderComponent = ({
  children,
  isAuth = false,
}: {
  children: React.ReactElement | React.ReactNode;
  isAuth: boolean;
}) => {
  if (isAuth)
    return (
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    );

  return <main>{children}</main>;
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {renderComponent({ children, isAuth: false })}
      </body>
    </html>
  );
}
