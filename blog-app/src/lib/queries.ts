import { defineQuery } from "next-sanity";

export const startup_query = defineQuery(`
  *[_type == "startup" && defined(slug.current)]{
    _id,
    title,
    slug,
    _createdAt,
    category,
    image,views,description,
    author->{
      _id,
      name,
      image,
      bio
    }
  }
`);
