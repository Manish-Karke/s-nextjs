"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset: React.FC = () => {
  const reset = () => {
    // Query the form element with a class of `.search-form`
    const form = document.querySelector(
      ".search-form"
    ) as HTMLFormElement | null;

    if (form) {
      form.reset(); // Reset all form inputs to their initial values
    }
  };

  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X className="size-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
