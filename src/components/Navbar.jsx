import { NavLink, Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu, ShoppingBag, User } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `text-sm font-medium transition-colors hover:text-primary ${
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        }`
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingBag className="h-5 w-5 text-primary" />
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            MyApp
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <NavLink to="/dashboard">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </Button>
          </NavLink>

          {/* Mobile Nav (Sheet/Drawer) */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  MyApp
                </SheetTitle>
              </SheetHeader>
              <Separator className="my-4" />
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <NavItem key={link.to} {...link} />
                ))}
                <Separator className="my-2" />
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? "text-primary font-semibold" : "text-muted-foreground"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}