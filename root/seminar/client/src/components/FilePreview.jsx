/**
 * root/seminar/client/src/components/FilePreview.jsx
 * FilePreview component for the seminar website.
 */

import { useState, useEffect } from "react";

export default function FilePreview({ file }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!file) return;

    if (file instanceof File) {
      const reader = new FileReader();
      reader.onload = (e) => setContent(e.target.result);
      reader.readAsText(file);
    } else if (typeof file === "string") {
      fetch(file)
        .then((res) => res.text())
        .then(setContent);
    }
  }, [file]);

  if (!file) return <div>ファイルを選択してください</div>;

  return <pre>{content}</pre>;
}
