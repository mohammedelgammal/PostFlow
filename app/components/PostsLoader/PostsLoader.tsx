import { Skeleton } from "@/components/ui/skeleton";

const PostsLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-screen px-10">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="w-full h-[220px]">
          <div className="flex flex-col space-y-3 h-full p-4 border rounded-lg">
            <Skeleton className="h-[100px] w-full rounded-lg" />
            <div className="space-y-2 flex-grow">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <div className="flex items-center space-x-2 pt-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsLoader;
