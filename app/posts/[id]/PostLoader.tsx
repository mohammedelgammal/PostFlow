import { Skeleton } from "@/components/ui/skeleton";

const PostLoader = () => {
  return (
    <div className="w-full space-y-6">
      <Skeleton className="h-15 w-3/4 rounded-lg" />
      <div className="space-y-3">
        <Skeleton className="h-5 w-full rounded-lg" />
        <Skeleton className="h-5 w-full rounded-lg" />
        <Skeleton className="h-5 w-5/6 rounded-lg" />
        <Skeleton className="h-5 w-4/12 rounded-lg" />
      </div>
    </div>
  );
};

export default PostLoader;
