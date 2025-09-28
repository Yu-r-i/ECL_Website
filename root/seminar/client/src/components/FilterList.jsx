/**
 * root/seminar/client/src/components/FilterList.jsx
 * FilterList component for the archive page.
 */

import { useState } from "react";

export default function FilterList({ options, onFilter }) {
  const [selected, setSelected] = useState("");

  // change handler for the select dropdown
  const handleChange = (e) => {
    setSelected(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="filter-list">
      <select
        id="filterSelect"
        name="filterSelect"
        value={selected}
        onChange={handleChange}
      >
        <option value="">すべて表示</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
