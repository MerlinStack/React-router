import { useState } from "react";
import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";

// Sample products data
const allProducts = [
  { id: 1, name: "Premium Headphones", price: 99.99, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop" },
  { id: 2, name: "Classic Watch", price: 199.99, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" },
  { id: 3, name: "Leather Bag", price: 149.99, category: "Bags", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=300&h=300&fit=crop" },
  { id: 4, name: "Sunglasses", price: 59.99, category: "Accessories", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop" },
  { id: 5, name: "Smart Speaker", price: 79.99, category: "Electronics", image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=300&h=300&fit=crop" },
  { id: 6, name: "Running Shoes", price: 89.99, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  
  const category = searchParams.get("category") || "all";
  
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = category === "all" || product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchParams({ search: searchTerm, category });
    } else {
      setSearchParams({ category });
    }
  };

  const filterByCategory = (cat) => {
    if (searchTerm) {
      setSearchParams({ search: searchTerm, category: cat });
    } else {
      setSearchParams({ category: cat });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold">Our Products</h1>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={category === "all" ? "default" : "outline"}
          onClick={() => filterByCategory("all")}
          size="sm"
        >
          All
        </Button>
        <Button 
          variant={category === "Electronics" ? "default" : "outline"}
          onClick={() => filterByCategory("Electronics")}
          size="sm"
        >
          Electronics
        </Button>
        <Button 
          variant={category === "Accessories" ? "default" : "outline"}
          onClick={() => filterByCategory("Accessories")}
          size="sm"
        >
          Accessories
        </Button>
        <Button 
          variant={category === "Bags" ? "default" : "outline"}
          onClick={() => filterByCategory("Bags")}
          size="sm"
        >
          Bags
        </Button>
        <Button 
          variant={category === "Footwear" ? "default" : "outline"}
          onClick={() => filterByCategory("Footwear")}
          size="sm"
        >
          Footwear
        </Button>
      </div>

      {/* Search Query Display */}
      {searchTerm && (
        <div className="bg-muted/30 p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Showing results for: <span className="font-semibold text-foreground">"{searchTerm}"</span>
          </p>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      )}
    </div>
  );
}