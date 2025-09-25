import { Component } from "react";
import ReactDOM from "react-dom/client"; // 👈 new import
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
function About() {
  return <h2>About Page</h2>;
}

// Main App class
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/room/:roomCode" element={<Room />} />
        </Routes>
      </Router>
    );
  }
}

// Mount App into DOM (React 18+ way)
const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement); // 👈 new API
root.render(<App />);
