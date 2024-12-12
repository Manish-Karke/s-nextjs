"use client";
import * as React from "react";

const UserPage = ({ params }) => {
  const { id } = React.use(params); // Directly access `id` from the params object

  return (
    <div>
      <h1 className="text-3xl">User details for {id}</h1>
    </div>
  );
};

export default UserPage;
1;
