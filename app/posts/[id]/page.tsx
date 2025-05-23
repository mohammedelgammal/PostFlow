"use client";

import { useParams } from "next/navigation";
import { Error } from "@/common/components";
import { usePost } from "@/hooks/api/usePosts";
import PostLoader from "./PostLoader";

const Post = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = usePost(id as string);

  return (
    <section className="flex items-start content-center min-w-full max-w-[1536px] min-h-[350px]">
      {isLoading ? (
        <PostLoader />
      ) : error ? (
        <Error error={error.message} />
      ) : (
        <div className="flex flex-col gap-5 pb-10">
          <h1 className="primary-gradient text-5xl first-letter:uppercase min-h-[60px]">
            {post?.title}
          </h1>
          <p className="text-gray-600 text-xl first-letter:uppercase">
            {post?.body}
          </p>
        </div>
      )}
    </section>
  );
};

export default Post;
