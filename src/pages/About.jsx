import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg text-muted-foreground">
          Learn more about our company and what makes us unique.
        </p>
      </div>
      
      <Card>
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-muted-foreground">
            Founded in 2025, MyApp has been dedicated to providing high-quality products 
            at affordable prices. We believe that everyone deserves access to premium 
            items without breaking the bank.
          </p>
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center space-y-2">
            <Users className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              To deliver exceptional value and quality to customers worldwide.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center space-y-2">
            <Target className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Our Vision</h3>
            <p className="text-sm text-muted-foreground">
              To become the most trusted online shopping destination globally.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center space-y-2">
            <Heart className="h-12 w-12 text-primary mx-auto" />
            <h3 className="font-semibold text-lg">Our Values</h3>
            <p className="text-sm text-muted-foreground">
              Customer satisfaction, integrity, and innovation in everything we do.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}