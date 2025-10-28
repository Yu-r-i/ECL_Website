/**
 * root/seminar/client/src/components/FileTree.jsx
 * Directory tree component (API integrated).
 */

import { useEffect, useState } from "react";
import { Tree } from "react-arborist";

export default function FileTree({ onSelect }) {
  const [treeData, setTreeData] = useState([]);

  // Fetch files from API and convert to hierarchical structure
  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => {
        const grouped = {};
        data.forEach((file) => {
          const { year, student, name, path } = file;
          if (!grouped[year]) grouped[year] = {};
          if (!grouped[year][student]) grouped[year][student] = [];
          grouped[year][student].push({ id: path, name });
        });

        const formatted = Object.keys(grouped).map((year) => ({
          id: year,
          name: year,
          children: Object.keys(grouped[year]).map((student) => ({
            id: `${year}-${student}`,
            name: student,
            children: grouped[year][student],
          })),
        }));

        setTreeData(formatted);
      })}, []);

  // Click handler
  const handleSelect = (nodes) => {
    if (nodes && nodes.length > 0) {
      const node = nodes[0];
      if (!node.isInternal && node.data.id) {
        onSelect(node.data.id);
      }
    }
  };

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Tree
        data={treeData}
        childrenAccessor="children"
        onSelect={handleSelect}
      />
    </div>
  );
}
