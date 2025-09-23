/**
 * root/seminar/client/src/components/FileTree.jsx
 * directory tree component for the seminar website.
 */

export default function FileTree({ onSelect }) {
  const dummyData = {
    "2023": {
      studentA: ["report1.pdf", "report2.md"],
      studentB: ["thesis.pdf"]
    },
    "2024": {
      studentC: ["graduation_thesis.pdf"]
    }
  };

  return (
    <div>
      {Object.entries(dummyData).map(([year, students]) => (
        <div key={year}>
          <strong>{year}</strong>
          <ul>
            {Object.entries(students).map(([student, files]) => (
              <li key={student}>
                {student}
                <ul>
                  {files.map((file) => (
                    <li
                      key={file}
                      onClick={() => onSelect(`${year}/${student}/${file}`)}
                      style={{ cursor: "pointer" }}
                    >
                      {file}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
