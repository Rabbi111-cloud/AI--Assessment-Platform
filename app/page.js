"use client";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [sectionColors, setSectionColors] = useState([
    "#0f172a", "#1e293b", "#111827", "#1c1f2c", "#11121f", "#1a1c2c", "#1f1f2f", "#10111a", "#1b1b2f", "#12122a"
  ]);

  function randomColor() {
    const colors = ["#6366f1","#10b981","#facc15","#f472b6","#22d3ee","#f97316","#818cf8","#a3e635","#f87171","#34d399"];
    return colors[Math.floor(Math.random()*colors.length)];
  }

  function handleClickSection(idx) {
    const newColors = [...sectionColors];
    newColors[idx] = randomColor();
    setSectionColors(newColors);
  }

  useEffect(() => {
    const container = document.getElementById("bubble-container");
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${20 + Math.random() * 80}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${8 + Math.random() * 12}s`;
      bubble.onclick = () => {
        const newColors = sectionColors.map(() => randomColor());
        setSectionColors(newColors);
      };
      container.appendChild(bubble);
    }
  }, []);

  return (
    <main style={{ position: "relative" }}>
      <div id="bubble-container" className="bubbles"></div>

      {/* 1. Header */}
      <header style={{ background: sectionColors[0], position:"sticky", top:0, padding:"20px 0", zIndex:10 }} onClick={()=>handleClickSection(0)}>
        <div className="container" style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <div style={{ fontSize:"1.5rem", fontWeight:"bold" }}>AI Assess</div>
          <nav>
            <a href="#features" style={{ margin:"0 15px" }}>Features</a>
            <a href="#howitworks" style={{ margin:"0 15px" }}>How It Works</a>
            <a href="#pricing" style={{ margin:"0 15px" }}>Pricing</a>
            <a href="/login" style={{ margin:"0 15px" }}>Login</a>
            <a href="/signup"><button className="button" style={{ marginLeft:"10px" }}>Sign Up</button></a>
          </nav>
        </div>
      </header>

      {/* 2. Hero */}
      <section style={{ background: sectionColors[1], padding:"120px 20px 80px 20px", textAlign:"center" }} onClick={()=>handleClickSection(1)}>
        <h1 style={{ fontSize:"3rem", marginBottom:"20px" }}>Test Your Backend Skills, Get AI Evaluated</h1>
        <p style={{ fontSize:"1.25rem", color:"var(--muted)", marginBottom:"30px" }}>
          Showcase your expertise and get hired faster with AI-powered backend assessments.
        </p>
        <a href="/signup"><button className="button">Get Started Free</button></a>
        <a href="#howitworks" style={{ marginLeft:"20px" }}><button className="button" style={{ background:"var(--secondary)" }}>Learn More</button></a>
      </section>

      {/* 3. Features */}
      <section id="features" style={{ background: sectionColors[2], padding:"60px 20px" }} onClick={()=>handleClickSection(2)}>
        <div className="container" style={{ display:"flex", justifyContent:"space-around", flexWrap:"wrap" }}>
          {[
            { title:"Real Assessments", desc:"Answer backend challenges designed by experts." },
            { title:"AI Feedback", desc:"Get structured insights and scores instantly." },
            { title:"Career Opportunities", desc:"Share your report with top companies." },
          ].map((f, idx) => (
            <div key={idx} className="card" style={{ width:"30%", margin:"15px", textAlign:"center", padding:"30px" }}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials */}
      <section style={{ background: sectionColors[3], padding:"80px 20px", textAlign:"center" }} onClick={()=>handleClickSection(3)}>
        <h2>What Users Say</h2>
        <div style={{ display:"flex", justifyContent:"space-around", flexWrap:"wrap", marginTop:"40px" }}>
          {[
            { text:"This platform transformed how I showcase my backend skills!", author:"Jane D." },
            { text:"AI scoring is incredibly detailed and accurate.", author:"Mike S." },
            { text:"I got hired because of the report this platform generated.", author:"Emma L." },
          ].map((t, idx) => (
            <div key={idx} className="card" style={{ width:"30%", margin:"15px" }}>
              <p>"{t.text}"</p>
              <p style={{ fontWeight:"bold", marginTop:"10px" }}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. How It Works */}
      <section style={{ background: sectionColors[4], padding:"80px 20px" }} onClick={()=>handleClickSection(4)}>
        <h2 style={{ textAlign:"center", marginBottom:"40px" }}>How It Works</h2>
        <div style={{ display:"flex", justifyContent:"space-around", flexWrap:"wrap" }}>
          {[
            { step:"1", title:"Sign Up", desc:"Create your account and complete your profile." },
            { step:"2", title:"Take Assessment", desc:"Answer backend challenges designed for real-world skills." },
            { step:"3", title:"Get AI Report", desc:"Receive a detailed AI evaluation with scores and feedback." },
            { step:"4", title:"Share & Get Hired", desc:"Show your report to companies and land opportunities." },
          ].map((s, idx) => (
            <div key={idx} className="card" style={{ width:"22%", margin:"10px", textAlign:"center" }}>
              <h3>{s.step}</h3>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
