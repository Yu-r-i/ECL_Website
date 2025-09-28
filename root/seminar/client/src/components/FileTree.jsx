/**
 * root/seminar/client/src/components/FileTree.jsx
 * directory tree component for the seminar website.
 */

import { Tree } from "react-arborist";

export default function FileTree({ onSelect }) {
  // sample data structure for the tree
  const treeData = [
    {
      id: "2025",
      name: "2025",
      children: [
        {
          id: "2312110013",
          name: "Yuri Funato",
          children: [
            { id: "2023-studentA-report1", name: "report1.pdf" },
            { id: "2023-studentA-report2", name: "report2.md" },
          ],
        },
      ],
    }
  ];

  // click handler for selecting a file
  const handleSelect = (nodes) => {
    if (nodes && nodes.length > 0) {
      const node = nodes[0];
      if (!node.isInternal) {
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
