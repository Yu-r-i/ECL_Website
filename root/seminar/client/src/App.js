/**
 * root/seminar/client/src/App.js
 * Main application component for the seminar client.
 */

// Importing Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Importing CSS files for styling
import "./css/header.css";
import "./css/footer.css";
import "./css/common.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Hello Seminar App</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
