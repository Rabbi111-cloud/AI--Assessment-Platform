"use client"; // MUST be the very first line
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;
    for (let i = 0; i < 15; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${30 + Math.random() * 70}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <main className="container" style={{ position: "relative" }}>
      <div id="bubble-container" className="bubbles"></div>

      <section style={{ textAlign: "center", padding: "80px 0" }}>
        <h1 style={{ fontSize: "3rem" }}>AI Backend Developer Assessment</h1>
        <p style={{ color: "var(--muted)", fontSize: "1.25rem", margin: "20px 0" }}>
          Test your backend skills, get AI-evaluated, and showcase your expertise to top companies.
        </p>
        <a href="/signup">
          <button className="button">Get Started</button>
        </a>
      </section>

      {/* ...rest of landing page */}
    </main>
  );
}
