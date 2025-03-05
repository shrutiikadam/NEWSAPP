import { useState } from "react";
import { Search } from "lucide-react"; // Modern search icon

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      {/* Google Font Import */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
        `}
      </style>

      <form 
        onSubmit={handleSearch} 
        className="flex justify-center items-center my-6"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <div className="relative flex items-center w-3/4 md:w-1/2">
          {/* Glassmorphic Input Field */}
          <input
            type="text"
            placeholder="Search for latest news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 pl-5 pr-14 text-lg text-black bg-white bg-opacity-10 backdrop-blur-lg border border-black rounded-full focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 transition duration-300 placeholder-gray-300"
          />

          {/* Search Button with Icon */}
          <button 
            type="submit" 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 text-gray-900 p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            <Search size={22} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
