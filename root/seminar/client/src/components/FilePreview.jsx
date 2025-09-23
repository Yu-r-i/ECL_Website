/**
 * root/seminar/client/src/components/FilePreview.jsx
 * FilePreview component for the seminar website.
 */

export default function FilePreview({ file }) {
  if (!file) {
    return <div>ファイルを選択してください</div>;
  }

  if (file.endsWith(".pdf")) {
    return (
      <iframe
        src={`/files/${file}`}
        className="pdf-frame"
        title="PDF Preview"
      ></iframe>
    );
  }

  if (file.endsWith(".md")) {
    return <div>Markdownプレビュー（将来実装）: {file}</div>;
  }

  return <div>プレビュー未対応: {file}</div>;
}
