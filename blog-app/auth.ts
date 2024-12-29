import { client } from "@/sanity/lib/client";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { Author_query_by_Github_id } from "./src/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user: { name, image, email },
      profile: { id, bio, login },
    }) {
      const existingUser = await client
        .withConfig({ useCdn: false })
        .fetch(Author_query_by_Github_id, {
          id,
        });

      if (existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          image,
          username: login,
          email,
          bio: bio || "",
        });
      }

      return true;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(Author_query_by_Github_id, {
            id: profile?.id,
          });
        token.id = user?._id;
      }
      return token;
    },
    async session({ session, token }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  },
});
