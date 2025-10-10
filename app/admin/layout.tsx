import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import "../globals.css";

export const metadata = { title: "Dashboard" }

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <SidebarProvider
          style={
            {
              "--sidebar-width": "calc(var(--spacing) * 72)",
              "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties
          }
        >
          <AppSidebar variant="inset" />
          <div className="flex flex-col flex-1">
            <SiteHeader />
            <main className="flex flex-1 flex-col p-6">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
