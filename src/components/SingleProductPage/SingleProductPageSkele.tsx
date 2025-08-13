import { Skeleton } from "../ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="text-white mx-4 text-sm mb-2">
        <Skeleton className="h-4 w-1/4" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 my-1 py-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Skeleton */}
          <div className="w-full md:w-1/2 py-2 rounded-2xl shadow-md bg-white flex justify-center">
            <Skeleton className="h-80 w-72" />
          </div>

          {/* Info Skeleton */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <Skeleton className="h-6 w-3/4" /> {/* Title */}
              <div className="flex gap-2">
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>

            {/* Price */}
            <Skeleton className="h-5 w-32" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Skeleton className="h-10 w-full sm:w-40" />
              <Skeleton className="h-10 w-full sm:w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
