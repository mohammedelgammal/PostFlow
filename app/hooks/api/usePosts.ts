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

const useCreatePost = (successFn: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { title: string; body: string }) =>
      createPost({ title: data.title, body: data.body }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      successFn();
    },
  });
};

export { usePosts, usePost, useCreatePost };
