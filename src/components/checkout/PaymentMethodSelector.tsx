// src/components/checkout/PaymentMethodSelector.tsx
const methods = ["EasyPaisa", "JazzCash", "Bank Transfer", "Cash on Delivery"];

export default function PaymentMethodSelector() {
  return (
    <div className="p-4 border rounded-lg space-y-2">
      <h2 className="font-semibold text-lg">Payment Method</h2>
      {methods.map((m) => (
        <label key={m} className="flex items-center space-x-2">
          <input
            type="radio"
            name="payment"
            value={m}
            className="cursor-pointer"
          />
          <span>{m}</span>
        </label>
      ))}
    </div>
  );
}
