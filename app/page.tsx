"use client";

import { PostCard, PostsLoader } from "./components";
import { Error } from "./common/components";
import { usePosts } from "./hooks/api/usePosts";

const Home = () => {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <section className="container-center max-w-[1536px] flex-col gap-12">
      <div className="container-center flex-col gap-7">
        <h1 className="primary-gradient text-4xl text-center">
          Dive Into Stories: Wander Through Our Curated
          <br className="max-lg:hidden" />
          List of Thoughtful Writings
        </h1>
        <p className="text-gray-600 text-center">
          Don’t just skim the surface. Click into any post to uncover detailed{" "}
          <br />
          analyses, rich storytelling, and actionable takeaways
        </p>
      </div>
      {isLoading ? (
        <PostsLoader />
      ) : error ? (
        <Error error={error.message} />
      ) : (
        <div className="grid grid-cols-3 gap-x-6 gap-y-4 max-lg:grid-cols-2 max-md:grid-cols-1 pb-10">
          {posts?.map((post, index) => {
            return (
              <PostCard
                key={index}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Home;
