import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!query) return;
    navigate("/results", { state: { query } });
  };

  return (
    <div className="flex w-full max-w-2xl mx-auto gap-2">
      <input
        type="text"
        placeholder="Ask for outfit ideas..."
        className="flex-1 border rounded-xl px-4 py-3 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-pink-500 text-white px-6 rounded-xl hover:bg-pink-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
