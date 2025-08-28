import React, { useState } from "react";
import Image from "next/image";

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  placeholder = "Tell us what you want to look for!" 
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const isDisabled = searchQuery.trim() === "";

  return (
    <div className="flex justify-center w-full">
      <form onSubmit={handleSubmit} className="w-[80%] mb-15 flex gap-4">
        <div className="flex-1 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 text-lg font-semibold 
                     border-2 border-black rounded-xl shadow-[3px_3px_0_#000]
                     focus:outline-none focus:shadow-[0px_0px_0_#000] transition-shadow
                     placeholder:text-gray-500 bg-white"
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={`llm-input-submit-button bg-white transition-all duration-200 ${
            isDisabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:shadow-[0px_0px_0_#000] active:shadow-[2px_2px_0_#000] active:translate-x-1 active:translate-y-1"
          }`}
        >
          <Image 
            src="/assets/icon/Send_Black.svg" 
            alt="Search"  
            width={30} 
            height={30} 
            className="border-black drop-shadow-title-middle"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;