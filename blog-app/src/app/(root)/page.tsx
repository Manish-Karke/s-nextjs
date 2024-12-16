import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container bg-pink-500 ">
        <h1 className="heading">
          Give Us idea <br /> connect with us hero
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote On Ideas and Get Noticed for your idea
          <br /> in the world of competition
        </p>
        <SearchForm />
      </section>
    </>
  );
}
