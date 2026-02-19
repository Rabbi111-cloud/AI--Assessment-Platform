"use client";
import { useEffect } from "react";

export default function LandingPage() {
  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${20 + Math.random() * 80}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${8 + Math.random() * 12}s`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <main style={{ position: "relative" }}>
      <div id="bubble-container" className="bubbles"></div>

      {/* 1. Header / Navigation */}
      <header className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", position: "sticky", top: 0, background: "var(--bg)", zIndex: 10 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>AI Assess</div>
        <nav>
          <a href="#features" style={{ margin: "0 15px" }}>Features</a>
          <a href="#howitworks" style={{ margin: "0 15px" }}>How It Works</a>
          <a href="#pricing" style={{ margin: "0 15px" }}>Pricing</a>
          <a href="/login" style={{ margin: "0 15px" }}>Login</a>
          <a href="/signup"><button className="button" style={{ marginLeft: "10px" }}>Sign Up</button></a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section style={{ textAlign: "center", padding: "120px 20px 80px 20px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Test Your Backend Skills, Get AI Evaluated</h1>
        <p style={{ fontSize: "1.25rem", color: "var(--muted)", marginBottom: "30px" }}>
          Showcase your expertise and get hired faster with AI-powered backend assessments.
        </p>
        <a href="/signup"><button className="button">Get Started Free</button></a>
        <a href="#howitworks" style={{ marginLeft: "20px" }}><button className="button" style={{ background: "var(--secondary)" }}>Learn More</button></a>
      </section>

      {/* 3. Features / Benefits Section */}
      <section id="features" className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "80px" }}>
        {[
          { title: "Real Assessments", desc: "Answer backend challenges designed by experts." },
          { title: "AI Feedback", desc: "Get structured insights and scores instantly." },
          { title: "Career Opportunities", desc: "Share your report with top companies." },
        ].map((f, idx) => (
          <div key={idx} className="card" style={{ width: "30%", margin: "15px", textAlign: "center", padding: "30px" }}>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. Social Proof / Testimonials */}
      <section className="container" style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2>What Users Say</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "40px" }}>
          {[
            { text: "This platform transformed how I showcase my backend skills!", author: "Jane D." },
            { text: "AI scoring is incredibly detailed and accurate.", author: "Mike S." },
            { text: "I got hired because of the report this platform generated.", author: "Emma L." },
          ].map((t, idx) => (
            <div key={idx} className="card" style={{ width: "30%", margin: "15px" }}>
              <p>"{t.text}"</p>
              <p style={{ fontWeight: "bold", marginTop: "10px" }}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. How It Works */}
      <section id="howitworks" className="container" style={{ marginBottom: "80px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>How It Works</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
          {[
            { step: "1", title: "Sign Up", desc: "Create your account and complete your profile." },
            { step: "2", title: "Take Assessment", desc: "Answer backend challenges designed for real-world skills." },
            { step: "3", title: "Get AI Report", desc: "Receive a detailed AI evaluation with scores and feedback." },
            { step: "4", title: "Share & Get Hired", desc: "Show your report to companies and land opportunities." },
          ].map((s, idx) => (
            <div key={idx} className="card" style={{ width: "22%", margin: "10px", textAlign: "center" }}>
              <h3>{s.step}</h3>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Call to Action / Signup Form */}
      <section className="container" style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2>Start Your Assessment Now</h2>
        <p style={{ color: "var(--muted)", marginBottom: "20px" }}>Sign up free and take your first assessment in minutes.</p>
        <a href="/signup"><button className="button">Sign Up Free</button></a>
      </section>

      {/* 7. Pricing / Plans */}
      <section id="pricing" className="container" style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "80px" }}>
        {[
          { name: "Basic", price: "$0", features: ["1 Assessment", "AI Feedback"] },
          { name: "Standard", price: "$29", features: ["5 Assessments", "Detailed AI Reports", "Dashboard"] },
          { name: "Premium", price: "$79", features: ["Unlimited Assessments", "Advanced AI Insights", "Company Sharing"] },
        ].map((p, idx) => (
          <div key={idx} className="card" style={{ width: "30%", margin: "15px", textAlign: "center" }}>
            <h3>{p.name}</h3>
            <h4>{p.price}</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {p.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button className="button">Choose Plan</button>
          </div>
        ))}
      </section>

      {/* 8. Additional Proof / Trust */}
      <section className="container" style={{ textAlign: "center", marginBottom: "80px" }}>
        <h2>Trusted By</h2>
        <p style={{ color: "var(--muted)" }}>SSL Secured | GDPR Compliant | Used by Top Tech Companies</p>
      </section>

      {/* 9. FAQ */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <h2 style={{ textAlign: "center" }}>FAQ</h2>
        {[
          { q: "Do I need to pay to try?", a: "No, you can take your first assessment for free." },
          { q: "How is the AI score calculated?", a: "Our AI evaluates architecture, security, scalability, and code quality." },
          { q: "Can companies see my results?", a: "Only if you choose to share your report." },
        ].map((f, idx) => (
          <div key={idx} className="card" style={{ margin: "10px 0" }}>
            <p><strong>{f.q}</strong></p>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {/* 10. Footer */}
      <footer className="container" style={{ textAlign: "center", padding: "40px 0", borderTop: "1px solid var(--card)" }}>
        <p>&copy; 2026 AI Assess | <a href="#">Privacy</a> | <a href="#">Terms</a></p>
        <p>Follow us: <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
      </footer>
    </main>
  );
}
