import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaSearch className="search-icon" />
    </div>
  );
}