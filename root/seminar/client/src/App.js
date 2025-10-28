/**
 * root/seminar/client/src/App.js
 * Main application component for the seminar client.
 */

// Importing necessary libraries
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Importing Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing page components
import ArchivePage from "./pages/ArchivePage";

// Importing CSS files for styling
import "./css/header.css";
import "./css/footer.css";
import "./css/common.css";

function App() {
  const [files, setFiles] = useState([]);

  // get files from API on component mount
  useEffect(() => {
    fetch("http://localhost:4000/api/files")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((err) => console.error("API fetch error:", err));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<ArchivePage files={files} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
