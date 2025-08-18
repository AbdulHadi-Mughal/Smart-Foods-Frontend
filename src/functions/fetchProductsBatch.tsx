import type { Spice } from "@/types/spice.type";

// fetchProductsBatch(names: string[])
async function fetchProductsBatch(names: string[]) {
  const q = names.join(",").replaceAll(" ", "-");
  const res = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/products/batch?batch=${q}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (!res.ok) throw new Error("batch fetch failed");
  const json: Spice[] = await res.json();
  return json;
}

export default fetchProductsBatch;
