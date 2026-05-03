import { Link } from "react-router";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
          <p className="font-bold text-primary mt-2">${product.price}</p>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full gap-2">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}