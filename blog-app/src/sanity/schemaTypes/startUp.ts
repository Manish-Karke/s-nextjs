import { defineField, defineType, type SchemaTypeDefinition } from "sanity";

export const startup: SchemaTypeDefinition = defineType({
  name: "startup",
  title: "Startup",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }], // to should be an array
    }),
    defineField({
      name: "category",
      type: "string",
      validation: (Rule) =>
        Rule.min(1).max(20).required().error("Please enter the category"), // Correct validation
    }),
    defineField({
      name: "image",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "pitch",
      type: "markdown",
    }),
  ],
});
