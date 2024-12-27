import { client } from "@/sanity/lib/client";
import React from "react";
import { startup_query_by_slug } from "@/lib/queries";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import markdownit from "markdown-it";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { View } from "../../../../components/View";

const md = new markdownit();
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);

  const post = await client.fetch(startup_query_by_slug, { id });

  if (!post) return notFound();

  const result = md.render(post?.pitch || "");
  return (
    <>
      <section className="pink_container !min-h-[10px] !py-2">
        <p className="tag bg-black"> {formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title} </h1>

        <p className="sub-heading !max-w-5xl"> {post.description}</p>

        <section className="section_container">
          {post.image && (
            <Image
              src={post.image}
              alt="thumbnail"
              width={500} // specify width
              height={600} // specify height
              className="w-full h-auto rounded-xl"
            />
          )}

          <div className=" space-y-5" mt-10 mac-w-4xl mx-auto>
            <div className="flex-between gap-5">
              <Link
                href={`/user/${post.author?._id}`}
                className="flex-gap-2 items-center mb-3"
              >
                {post.author?.image && (
                  <Image
                    src={post.author?.image}
                    alt="avatar"
                    height={64}
                    width={64}
                    className="rounded-full drop-shadow-lg"
                  />
                )}
                <div className="flex-between gap-5">
                  <h2 className="text-20-medium"> {post.author?.name}</h2>
                </div>
              </Link>

              <p className="category-tag">{post.category} </p>
            </div>
            <h3 className="text-30-bold"> pitch Details</h3>
            {result ? (
              <article
                className="prose max-w-4xl font-work-sans break-all"
                dangerouslySetInnerHTML={{ __html: result }}
              />
            ) : (
              <p className="no-result"> No content available</p>
            )}
          </div>

          <hr className="divider" />

          {/* {TODO :EDITOR SELECT IDEAS} */}
        </section>
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
