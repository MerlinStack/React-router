import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
  { icon: Shield, title: "Secure Payment", description: "100% secure transactions" },
  { icon: Clock, title: "24/7 Support", description: "Always here to help" },
  { icon: Star, title: "Premium Quality", description: "Best products guaranteed" },
];

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to MyApp
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover amazing products at unbeatable prices. Shop the latest trends today!
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2">
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-muted/30">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-primary text-primary-foreground p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg opacity-90 mb-6">
          Join thousands of satisfied customers today.
        </p>
        <Link to="/products">
          <Button variant="secondary" size="lg">
            Browse Products
          </Button>
        </Link>
      </section>
    </div>
  );
}