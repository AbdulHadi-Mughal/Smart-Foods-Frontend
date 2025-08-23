import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-[50vh] px-4">
      <Card className="w-full max-w-md shadow-xl border-2 border-gray-200">
        <CardHeader className="flex flex-col items-center text-center">
          <ShoppingCart className="w-12 h-12 text-muted-foreground mb-2" />
          <CardTitle className="text-xl font-semibold">
            Your cart is empty
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <p className="text-muted-foreground text-sm">
            Your cart is currently empty. Explore our products to see what works
            best for you.
          </p>
          <Button
            onClick={() => navigate("/products")}
            className="w-full flex items-center justify-center gap-2"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
