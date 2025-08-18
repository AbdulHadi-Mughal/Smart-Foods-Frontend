import type { JSX } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Cart page skeleton (shadcn/ui)
 * - Mirrors the exact layout of the real CartPage while data is loading.
 * - Drop this component in place of the real CartPage while fetching.
 */
export default function CartPageSkeleton(): JSX.Element {
  const skeletonCards = [0, 1, 2]; // matches the sample output which shows 4 cards

  return (
    <div>
      <main className="container mx-auto pb-6">
        {/* Page title
        <div className="mb-4">
          <Skeleton className="h-8 w-48" />
        </div> */}

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {/* Left: list of product cards (spans 2 cols on md+) */}
          <section className="md:col-span-2 space-y-3">
            {skeletonCards.map((key) => (
              <Card
                key={key}
                className="text-card-foreground flex-col gap-6 border-2 border-gray-200 shadow-lg group grid grid-cols-6 items-center justify-between py-2 px-4 rounded-2xl bg-card"
                aria-hidden="true"
                aria-label={`Cart item skeleton ${key}`}
              >
                {/* Left column: title, meta, totals */}
                <div className="col-span-3">
                  <div>
                    <Skeleton className="h-6 w-40" />
                  </div>

                  <div className="mt-3 grid grid-cols-1 items-center gap-3 text-sm">
                    <div>
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-6" />
                      </div>
                    </div>

                    <div className="whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-28" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                    </div>
                  </div>

                  <div className="text-sm font-semibold mt-2">
                    <Skeleton className="h-4 w-20" />
                  </div>

                  <div className="text-lg font-bold mt-1">
                    <Skeleton className="h-7 w-32" />
                  </div>
                </div>

                {/* Right column: action buttons + image */}
                <div className="grid grid-cols-1 col-span-3 items-center">
                  <div className="flex justify-center gap-2 ml-auto mb-4 opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* Buttons: skeleton circular placeholders */}
                    <Skeleton className="h-9 w-9 rounded-md" />
                    <Skeleton className="h-9 w-9 rounded-md" />
                  </div>

                  {/* Image skeleton */}
                  <div className="mx-auto mb-2 h-40 w-full max-w-[160px] px-2 pb-1 rounded object-cover shadow">
                    <Skeleton className="h-full w-full rounded" />
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Right: order summary */}
          <aside className="md:col-span-1 p-4 rounded-2xl shadow-sm bg-card h-fit">
            <div className="mb-2">
              <Skeleton className="h-6 w-36" />
            </div>

            <div className="flex justify-between text-sm mb-1">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-24" />
            </div>

            <div className="flex justify-between text-sm mb-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-6" />
            </div>

            <div className="mb-4">
              {/* Full-width CTA skeleton */}
              <Skeleton className="h-9 w-full rounded-md mx-auto" />
            </div>

            <div>
              <Skeleton className="h-4 w-40 mx-auto" />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
