import { UserIcon } from "lucide-react";

import { defineField, defineType, type SchemaTypeDefinition } from "sanity";
const UserIconWrapper = () => <UserIcon />;
export const author: SchemaTypeDefinition = defineType({
  // Correct type annotation
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIconWrapper,
  fields: [
    defineField({
      // Remove unnecessary schemaField object
      name: "id",
      type: "number",
    }),
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
    defineField({
      name: "email",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
    },
  },
});
