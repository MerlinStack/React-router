import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <div className="flex gap-4 mt-8">
        <Link to="/">
          <Button className="gap-2">
            <Home className="h-4 w-4" />
            Go Home
          </Button>
        </Link>
        <Link to="/products">
          <Button variant="outline" className="gap-2">
            <Search className="h-4 w-4" />
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
}