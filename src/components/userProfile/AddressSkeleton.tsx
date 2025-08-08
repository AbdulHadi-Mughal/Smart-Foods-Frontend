// AddressesSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "../ui/skeleton";

export function AddressesSkeleton() {
  return (
    <section className="max-w-3xl mx-auto hidden md:block">
      {/* Card container */}
      <div className="flex flex-col gap-6 border-2 border-gray-200 py-6 bg-white rounded-2xl shadow-md">
        {/* Header (title + description) */}
        <div className="grid grid-rows-[auto_auto] items-start gap-1.5 px-6 pb-6">
          {/* Title skeleton: matches "font-semibold text-xl" */}
          <Skeleton className="h-6 w-24 rounded" />
          {/* Description skeleton: matches "text-sm" */}
          <Skeleton className="h-4 w-40 rounded" />
        </div>

        {/* Content */}
        <div className="px-6 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              {/* Table header */}
              <thead className="border-b rounded-sm border-b-gray-200 text-sm font-semibold">
                <tr className="w-full bg-muted/50">
                  <th className="px-3 py-2">
                    <Skeleton className="h-4 w-12 rounded" /> {/* Area */}
                  </th>
                  <th className="px-3 py-2 hidden sm:table-cell">
                    <Skeleton className="h-4 w-16 rounded" /> {/* Street */}
                  </th>
                  <th className="px-3 py-2">
                    <Skeleton className="h-4 w-12 rounded" /> {/* City */}
                  </th>
                  <th className="px-3 py-2 hidden md:table-cell">
                    <Skeleton className="h-4 w-20 rounded" /> {/* Province */}
                  </th>
                  <th className="px-3 py-2 hidden lg:table-cell">
                    <Skeleton className="h-4 w-20 rounded" />{" "}
                    {/* Postal Code */}
                  </th>
                  <th className="px-3 py-2">
                    <Skeleton className="h-4 w-4 rounded" /> {/* Icon */}
                  </th>
                </tr>
              </thead>

              {/* Two loading rows */}
              <tbody>
                {[0, 1].map((_, idx) => (
                  <tr key={idx} className="w-full">
                    <td className="p-2">
                      <Skeleton className="h-4 w-full rounded" />
                    </td>
                    <td className="p-2 hidden sm:table-cell">
                      <Skeleton className="h-4 w-full rounded" />
                    </td>
                    <td className="p-2">
                      <Skeleton className="h-4 w-full rounded" />
                    </td>
                    <td className="p-2 hidden md:table-cell">
                      <Skeleton className="h-4 w-full rounded" />
                    </td>
                    <td className="p-2 hidden lg:table-cell">
                      <Skeleton className="h-4 w-full rounded" />
                    </td>
                    <td className="p-2">
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Address button placeholder */}
          <div className="flex justify-start">
            <Skeleton className="h-10 w-32 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AddressesSkeleton);
