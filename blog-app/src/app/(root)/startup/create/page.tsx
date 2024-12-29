import React from "react";
import StartUpForm from "../../../../components/startUpForm";
import { redirect } from "next/dist/server/api-utils";

import { auth } from "../../../../../auth";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/"); // Corrected syntax

  return (
    <div>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit AI ideas</h1>
      </section>
      <StartUpForm />
    </div>
  );
};

export default page;
