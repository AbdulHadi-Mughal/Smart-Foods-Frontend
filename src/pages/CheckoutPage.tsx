import { useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { buyNowItem, cartStore } from "@/stores/cart.store";
import { useEffect } from "react";
import { infoToast } from "@/components/global/Toasts";

function AuthSection() {
  return (
    <Card className="shadow-lg border-2 border-gray-200 max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p>You need to sign in or create an account to proceed.</p>
        <div className="flex gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Create Account</Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ProductSection({ name }) {
  return (
    <Card className="shadow-xl border-2 border-gray-200">
      <CardHeader>
        <CardTitle>Product</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <div>
            <p className="font-semibold">{dummyProduct.name}</p>
            <p className="text-sm text-gray-600">{dummyProduct.shortDesc}</p>
          </div>
          <p className="font-semibold">Rs {dummyProduct.subtotal}</p>
        </div>
        <Separator />
        <p className="font-semibold">Subtotal: Rs {dummyProduct.subtotal}</p>
      </CardContent>
    </Card>
  );
}

function AddressSection() {
  return (
    <Card className="shadow-xl border-2 border-gray-200">
      <CardHeader>
        <CardTitle>Address</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <RadioGroup defaultValue={savedAddresses[0].id}>
          {savedAddresses.map((addr) => (
            <div key={addr.id} className="flex items-center space-x-2">
              <RadioGroupItem value={addr.id} id={addr.id} />
              <Label htmlFor={addr.id}>{addr.line}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button variant="outline">+ Add New Address</Button>
      </CardContent>
    </Card>
  );
}

function PaymentSection() {
  return (
    <Card className="shadow-xl border-2 border-gray-200">
      <CardHeader>
        <CardTitle>Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <RadioGroup defaultValue="COD">
          {["EasyPaisa", "JazzCash", "Bank Transfer", "COD"].map((method) => (
            <div key={method} className="flex items-center space-x-2">
              <RadioGroupItem value={method} id={method} />
              <Label htmlFor={method}>{method}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
}

function ActionButtons() {
  return (
    <div className="flex justify-end gap-4 mt-6">
      <Button variant="outline">Cancel</Button>
      <Button>Confirm Order</Button>
    </div>
  );
}

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); // buy now or cart
  const products =
    type === "cart"
      ? cartStore((state) => state.cartItems)
      : buyNowItem((state) => state.cartItem);

  useEffect(() => {}, [third]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <AuthSection />
      <ProductSection />
      <AddressSection />
      <PaymentSection />
      <ActionButtons />
    </div>
  );
}
