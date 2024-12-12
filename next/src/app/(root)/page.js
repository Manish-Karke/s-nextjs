import React from "react";
import Hi from "../component/hi"; // Import default export
import { greetManish } from "../component/hello";
export default function Home() {
  return (
    <>
      {greetManish()} {/* Render the greetManish function */}
      <Hi /> {/* Render the Hi component */}
    </>
  );
}
