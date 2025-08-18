// src/components/checkout/AddressSelector.tsx
export default function AddressSelector() {
  return (
    <div className="p-4 border rounded-lg space-y-2">
      <h2 className="font-semibold text-lg">Shipping Address</h2>
      <select className="border p-2 rounded w-full">
        <option>Home Address</option>
        <option>Office Address</option>
      </select>
      <button className="text-sm text-blue-600 hover:underline">
        + Add new address
      </button>
    </div>
  );
}
