import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const folders = [
    { name: "About Me", icon: "👋", color: "pink", route: "/about" },
    { name: "Education", icon: "📈", color: "blue", route: "/education" },
    { name: "Skills", icon: "⚡", color: "purple", route: "/skills" },
    { name: "Projects", icon: "💼", color: "coral", route: "/projects" },
    { name: "Contact", icon: "📧", color: "yellow", route: "/contact" }
  ];

  return (
    <div className="page">
      <div className="browser">
        <div className="browser-top">
          <div className="dots">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="address">www.your-portfolio.dev</div>
        </div>

        <div className="inner">
          {location.pathname === "/" && (
            <>
              <div className="header">
                <h2>Portfolio Explorer</h2>
              </div>

              <div className="folders">
                {folders.map((f) => (
                  <div
                    key={f.name}
                    className={`folder ${f.color}`}
                    onClick={() => navigate(f.route)}
                  >
                    <span className="folder-icon">{f.icon}</span>
                    <p>{f.name}</p>
                  </div>
                ))}
              </div>

              <div className="notice">
                <div className="notice-icon">⚠️</div>
                <div className="notice-content">
                  <h4>Portfolio Notice 💖</h4>
                  <p>
                    Click on any folder above to explore different sections.✨
                  </p>
                </div>
              </div>
            </>
          )}

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>


        </div>
      </div>
    </div>
  );
}
