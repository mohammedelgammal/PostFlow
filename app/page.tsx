import { PostCard } from "./components";

const Home = () => {
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
      <div className="grid grid-cols-3 gap-x-6 gap-y-4 max-lg:grid-cols-2 pb-10">
        {Array.from({ length: 30 }).map((_, index) => {
          return (
            <PostCard
              key={index}
              id={1}
              title="Mastering the Art of Team Collaboration"
              body="ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Home;
