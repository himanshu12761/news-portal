"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search({ links, onFilter }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = links.filter(link =>
      link.label.toLowerCase().includes(value.toLowerCase())
    );

    onFilter(filtered);
  };

  return (
    <div className="p-4 border-b border-white/20 flex items-center space-x-2">
      <MagnifyingGlassIcon className="h-5 w-5 text-white" />
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent border-b-2 border-black/40 focus:outline-none text-black placeholder-white text-md"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}
