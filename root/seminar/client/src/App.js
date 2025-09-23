/**
 * root/seminar/client/src/App.js
 * Main application component for the seminar client.
 */

// Importing necessary libraries
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
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ArchivePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
