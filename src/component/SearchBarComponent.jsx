import React from "react";
import { Search } from "lucide-react";

const SearchBarComponentPage = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full mx-14 mt-5 relative">
        <input
          type="text"
          name="q"
          className="w-full bg-white h-10 p-5 rounded-full focus:ring-[#087e8b] focus:ring-2 focus:outline-none"
          placeholder="Search book or category"
        />
      </div>
    </div>
  );
};

export default SearchBarComponentPage;
