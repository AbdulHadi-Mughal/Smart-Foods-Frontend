import { Skeleton } from "../ui/skeleton";

const ProductPageSkeleton = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="text-white mx-4 text-sm mb-2">
        <div className="flex gap-2 items-center">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-4 rounded-full" /> {/* Separator */}
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-4 rounded-full" /> {/* Separator */}
          <Skeleton className="h-4 w-24" />
        </div>
      </nav>

      {/* Main Container */}
      <div className="container mx-auto px-4 my-1 py-5">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image */}
          <div className="w-full md:w-1/2 py-2 rounded-2xl shadow-md bg-white flex justify-center">
            <Skeleton className="h-80 w-80 rounded-xl" />
          </div>

          {/* Product Info */}
          <div className="flex-1 space-y-2">
            {/* Title & Wishlist */}
            <div className="flex items-start justify-between">
              <Skeleton className="h-7 w-3/4" /> {/* Title */}
              <Skeleton className="h-9 w-9 rounded-md" /> {/* Heart button */}
            </div>

            {/* Price */}
            <Skeleton className="h-6 w-28" />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-evenly pt-4">
              <Skeleton className="h-10 w-full sm:w-2/5 rounded-md" />
              <Skeleton className="h-10 w-full sm:w-2/5 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
