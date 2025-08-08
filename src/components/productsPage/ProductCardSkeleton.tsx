import { Card, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="py-1 w-full flex flex-col justify-between shadow-xl rounded-md border border-gray-200 transition hover:shadow-2xl hover:-translate-y-0.5 duration-300">
      <Skeleton className="h-60 w-full object-contain" />

      <CardContent className="space-y-1 px-2 pt-1 md:px-4 lg:px-6">
        <Skeleton className="h-8 font-semibold leading-tight b mb-1" />
        <Skeleton className="h-3 text-muted-foreground" />
        <Skeleton className="h-3 text-muted-foreground" />
        <div className="text-sm font-medium mt-1">
          <Skeleton className="text-primary inline" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between px-4 pb-2">
        <Skeleton className="w-6 h-4 rounded-2xl" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;
