// src/components/checkout/ProductSummary.tsx
type Product = {
  id: string;
  name: string;
  shortDesc: string;
  price: number;
  qty: number;
};

export default function ProductSummary({
  products,
  subtotal,
}: {
  products: Product[];
  subtotal: number;
}) {
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div className="p-4 border rounded-lg space-y-3">
      <h2 className="font-semibold text-lg">Order Summary</h2>
      {products.map((p) => (
        <div key={p.id} className="flex justify-between">
          <div>
            <p className="font-medium">{p.name}</p>
            <p className="text-sm text-gray-500">{p.shortDesc}</p>
            <p className="text-sm">Qty: {p.qty}</p>
          </div>
          <p className="font-medium">Rs {p.price * p.qty}</p>
        </div>
      ))}
      <div className="border-t pt-2 flex justify-between font-semibold">
        <span>Subtotal</span>
        <span>Rs {subtotal}</span>
      </div>
    </div>
  );
}
