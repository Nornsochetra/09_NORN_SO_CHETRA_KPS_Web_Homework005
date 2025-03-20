"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const SelectCartoonComponentPage = ({ selectItem }) => {
  const route = useRouter();
  const pathName = usePathname();
  const [query, setQuery] = useState("");

  const handleSelect = (e) => {
    const selectedId = e.target.value;
    setQuery(selectedId);
    route.push(`${pathName}?query=${selectedId}`);
  };

  return (
    <select
      onChange={handleSelect}
      id="category-select"
      className="p-2 box-border bg-[#f5f7f8] rounded-md w-64 outline-none focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-400"
    >
      <option>Select a Category</option>
      {selectItem.length > 0 ? (
        selectItem.map((option, index) => (
          <option key={index} value={option.id}>
            {option.cartoon_genre}
          </option>
        ))
      ) : (
        <option disabled>No books available.</option>
      )}
    </select>
  );
};

export default SelectCartoonComponentPage;
