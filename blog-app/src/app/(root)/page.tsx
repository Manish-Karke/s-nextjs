import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { startup_query } from "@/lib/queries";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>; // Marked as a Promise
}) {
  const resolvedSearchParams = await searchParams; // Await the searchParams promise
  const query = resolvedSearchParams.query || ""; // Use the resolved value
  const posts = await client.fetch(startup_query);
  console.log(JSON.stringify(posts, null, 2));
  interface post {
    _id: string;
    // other properties of the post
  }
  // Mocked post data
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: {
  //       _id: 1,
  //       name: "mission",
  //     },
  //     _id: 1,
  //     description: "This is just an awful idea",
  //     image:
  //       "https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png",
  //     category: "AI",
  //     title: "We are heading toward AI",
  //   },
  // ];

  return (
    <>
      <section className="pink_container bg-pink-500">
        <h1 className="heading">
          Give Us Idea <br /> Connect with Us Hero
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Ideas, and Get Noticed for your idea
          <br /> in the world of competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All ideas"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: post) => (
              <StartUpCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No idea is pitched</p>
          )}
        </ul>
      </section>
    </>
  );
}
