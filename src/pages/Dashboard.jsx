import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, ShoppingBag, Users, DollarSign } from "lucide-react";

export default function Dashboard({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    if (onLogout) onLogout();
    navigate("/");
  };

  const stats = [
    { title: "Total Orders", value: "156", icon: ShoppingBag, change: "+12%" },
    { title: "Total Customers", value: "2,345", icon: Users, change: "+18%" },
    { title: "Revenue", value: "$12,345", icon: DollarSign, change: "+23%" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" onClick={handleLogout} className="gap-2">
          <LogOut className="h-4 w-4" />
          Logout
        </Button>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change} from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((order) => (
              <div key={order} className="flex justify-between items-center py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">Order #{order}2345</p>
                  <p className="text-sm text-muted-foreground">Customer: John Doe</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$99.99</p>
                  <p className="text-sm text-green-600">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}