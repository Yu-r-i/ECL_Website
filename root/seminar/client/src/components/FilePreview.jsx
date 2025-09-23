/**
 * root/seminar/client/src/components/FilePreview.jsx
 * FilePreview component for the seminar website.
 */

export default function FilePreview({ file }) {
  if (!file) {
    return <div>ファイルを選択してください</div>;
  }

  return <div>プレビュー未対応: {file}</div>;
}
