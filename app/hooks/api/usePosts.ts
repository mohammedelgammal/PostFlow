import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, fetchPost, fetchPosts } from "@/lib/api/posts";

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

const useCreatePost = (title: string, body: string, successFn: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => createPost({ title, body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      successFn();
    },
  });
};

export { usePosts, usePost, useCreatePost };
