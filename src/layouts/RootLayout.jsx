import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-7xl">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center text-sm text-muted-foreground bg-muted/30">
        <div className="container mx-auto px-4">
          <p>© 2025 MyApp. All rights reserved.</p>
          <p className="text-xs mt-1">Built with React Router v7 + shadcn/ui</p>
        </div>
      </footer>
    </div>
  );
}