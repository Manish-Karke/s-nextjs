import { defineQuery } from "next-sanity";

export const startup_query = defineQuery(`
  *[_type == "startup" && defined(slug.current) && !defined($search) || category match $search|| title match $search || author->name match $search]|order(_createdAt desc){
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

export const startup_query_by_slug = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    category,
    image,
    views,
    description,
    author->{
      _id,
      name,
      image,
      bio
    },
    pitch,
  }
`);

export const startup_views_query = defineQuery(`
  *[_type == "startup" && _id == $id][0]{
    _id,
    views,
  }
`);

export const Author_query_by_Github_id = defineQuery(`
  *[_type == "author" && _id == $id][0]{
    _id,
    id,
    name,
    image,
    bio,
    username,}
  `);
