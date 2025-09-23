/**
 * root/seminar/client/src/components/FileTree.jsx
 * directory tree component for the seminar website.
 */

import { Tree } from "react-arborist";

export default function FileTree({ onSelect }) {
  // データ構造（react-arborist用）
  const treeData = [
    {
      id: "2023",
      name: "2023",
      children: [
        {
          id: "2023-studentA",
          name: "studentA",
          children: [
            { id: "2023-studentA-report1", name: "report1.pdf" },
            { id: "2023-studentA-report2", name: "report2.md" },
          ],
        },
        {
          id: "2023-studentB",
          name: "studentB",
          children: [{ id: "2023-studentB-thesis", name: "thesis.pdf" }],
        },
      ],
    },
    {
      id: "2024",
      name: "2024",
      children: [
        {
          id: "2024-studentC",
          name: "studentC",
          children: [{ id: "2024-studentC-thesis", name: "graduation_thesis.pdf" }],
        },
      ],
    },
  ];

  // ファイルクリック処理
  const handleSelect = (nodes) => {
    if (nodes && nodes.length > 0) {
      const node = nodes[0];
      if (!node.isInternal) {
        onSelect(node.data.id); // ファイルのidを親へ渡す
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
