import { useQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "@/lib/api/posts";

const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 20,
  });

const usePost = (id: string) =>
  useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
    staleTime: 1000 * 60 * 20,
  });

export { usePosts, usePost };
