"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBarComponentPage = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const pathName = usePathname();

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`${pathName}?search=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between w-full px-4 sm:px-8 md:px-14 mt-5"
    >
      <div className="w-full relative">
        <input
          type="text"
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-white h-10 p-5 rounded-full focus:ring-[#087e8b] focus:ring-2 focus:outline-none text-sm sm:text-base"
          placeholder="Search book or category"
        />
      </div>
    </form>
  );
};

export default SearchBarComponentPage;
