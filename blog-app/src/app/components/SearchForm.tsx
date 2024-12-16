import React from "react";

const SearchForm = () => {
  return (
    <>
      <form action="/" scroll={false} className="search-form">
        <input
          name="query"
          defaultValue={""}
          className="search-input"
          placeholder="search ideas"
        />

        <div className="flex gap-2"> </div>
      </form>
    </>
  );
};

export default SearchForm;
