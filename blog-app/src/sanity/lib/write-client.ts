import "server-only";

import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, token } from "../env";
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

if (!writeClient.config().token) {
  throw new Error(
    "The writeClient needs a token to be able to write data to your dataset"
  );
}
