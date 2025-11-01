import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query.trim());
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search contact..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="search-btn" onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}