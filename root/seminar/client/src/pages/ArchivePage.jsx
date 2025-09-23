/**
 * root/seminar/client/src/pages/ArchivePage.jsx
 * ArchivePage for the seminar website.
*/

// React
import { useState } from "react";

// Components
import SearchBar from "../components/SearchBar";
import FilterList from "../components/FilterList";
import FileTree from "../components/FileTree";
import FilePreview from "../components/FilePreview";

// CSS
import "../css/archivepage.css";

export default function ArchivePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("");

  return (
    <div className="archive-page">
      <div className="archive-controls">
        <SearchBar onSearch={setSearchQuery} />
        <FilterList options={["2023", "2024"]} onFilter={setFilterYear} />
      </div>
      <div className="archive-content">
        <div className="file-tree">
          <FileTree
            onSelect={setSelectedFile}
            searchQuery={searchQuery}
            filterYear={filterYear}
          />
        </div>
        <div className="file-preview">
          <FilePreview file={selectedFile} />
        </div>
      </div>
    </div>
  );
}
