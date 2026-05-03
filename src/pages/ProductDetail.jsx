import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Star } from "lucide-react";

const products = {
  1: { id: 1, name: "Premium Headphones", price: 99.99, category: "Electronics", description: "High-quality wireless headphones with noise cancellation. Perfect for music lovers.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop", rating: 4.5, reviews: 128 },
  2: { id: 2, name: "Classic Watch", price: 199.99, category: "Accessories", description: "Elegant timepiece with leather strap. Water resistant up to 50m.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop", rating: 4.8, reviews: 89 },
  3: { id: 3, name: "Leather Bag", price: 149.99, category: "Bags", description: "Genuine leather bag with multiple compartments. Stylish and functional.", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&h=600&fit=crop", rating: 4.6, reviews: 67 },
  4: { id: 4, name: "Sunglasses", price: 59.99, category: "Accessories", description: "Polarized sunglasses with UV protection. Classic design.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop", rating: 4.4, reviews: 45 },
  5: { id: 5, name: "Smart Speaker", price: 79.99, category: "Electronics", description: "Voice-controlled smart speaker with premium sound quality.", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop", rating: 4.7, reviews: 234 },
  6: { id: 6, name: "Running Shoes", price: 89.99, category: "Footwear", description: "Comfortable running shoes with excellent grip and support.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop", rating: 4.9, reviews: 312 },
};

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products[productId];

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <Button onClick={() => navigate("/products")} className="mt-4">
          Back to Products
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={() => navigate(-1)} className="mb-6 gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <Card className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </Card>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-muted-foreground mt-2">{product.category}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-3xl font-bold text-primary">${product.price}</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{product.description}</p>
          </div>
          
          <Button size="lg" className="w-full gap-2">
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}