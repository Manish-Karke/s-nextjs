import React from "react";
import Ping from "./ping";
import { client } from "../sanity/lib/client";
import { startup_views_query } from "@/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
export const View = async ({ id }: { id: string }) => {
  const result = await client
    .withConfig({ useCdn: false })
    .fetch(startup_views_query, { id });
  const totalViews = result.views || 0; // Adjust this line based on the actual structure of the result

  //here i need to perforom to increase the views

  await writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit();

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">{totalViews} views</span>
      </p>
    </div>
  );
};
