/**
 * root/seminar/client/src/components/SearchBar.jsx
 * SearchBar component for the archive page.
 */

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  // state for the search query
  const [query, setQuery] = useState("");

  // submit handler for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="searchQuery"
        name="searchQuery"
        placeholder="キーワード検索..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">検索</button>
    </form>
  );
}
