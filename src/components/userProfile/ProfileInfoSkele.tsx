// ProfilePageSkeleton.tsx
import { memo } from "react";
import { Skeleton } from "../ui/skeleton";
import { Label } from "../ui/label";

const fields = ["City", "Restaurant", "Phone Number"];

export function ProfilePageSkeleton() {
  return (
    <main className="container mx-auto px-4 py-6 space-y-8">
      {/* Profile Info Section */}
      <section className="max-w-3xl mx-auto space-y-4">
        {/* Username + Email */}
        <header className="space-y-1 text-center">
          {/* matches <h1 class="text-3xl font-extrabold lg:text-4xl"> */}
          <Skeleton className="h-9 lg:h-11 w-48 lg:w-64 mx-auto rounded" />
          {/* matches <p class="text-muted-foreground lg:text-lg"> */}
          <Skeleton className="h-5 lg:h-6 w-64 lg:w-80 mx-auto rounded" />
        </header>

        {/* Profile Fields */}
        <div className="flex justify-center">
          <section className="max-w-3xl w-full mx-auto space-y-6 px-4 py-6">
            <div className="grid gap-6 md:grid-cols-2">
              {fields.map((field) => (
                <div key={field} className="group">
                  {/* exact same label spacing */}
                  <Label className="block mb-1 font-medium">{field}</Label>

                  {/* container identical to real UI */}
                  <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                    {/* text span skeleton matches line-clamp-1 text size */}
                    <Skeleton className="flex-1 h-5 rounded" />
                    {/* icon button skeleton matches  size-9 (h-10 w-10) */}
                    <Skeleton className="h-10 w-10 rounded-full ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default memo(ProfilePageSkeleton);
