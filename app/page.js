import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Create random bubbles
    const container = document.getElementById("bubble-container");
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

      <section style={{ display: "flex", justifyContent: "space-around", marginTop: "60px" }}>
        <div className="card" style={{ width: "30%" }}>
          <h3>Easy Assessment</h3>
          <p>Answer real backend challenges designed to test your architecture and coding skills.</p>
        </div>
        <div className="card" style={{ width: "30%" }}>
          <h3>AI Evaluation</h3>
          <p>Get instant, structured AI feedback to improve your backend capabilities.</p>
        </div>
        <div className="card" style={{ width: "30%" }}>
          <h3>Get Hired</h3>
          <p>Show your score to companies and land opportunities faster than ever.</p>
        </div>
      </section>

      <section style={{ marginTop: "80px", textAlign: "center" }}>
        <h2>What our users say</h2>
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
          <div className="card" style={{ width: "30%" }}>
            <p>"This platform transformed how I showcase my backend skills!"</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>— Jane D.</p>
          </div>
          <div className="card" style={{ width: "30%" }}>
            <p>"AI scoring is incredibly detailed and accurate."</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>— Mike S.</p>
          </div>
          <div className="card" style={{ width: "30%" }}>
            <p>"I got hired because of the report this platform generated."</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>— Emma L.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
