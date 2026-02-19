"use client";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [sectionColors, setSectionColors] = useState([
    "#0f172a","#1e293b","#111827","#1c1f2c","#11121f","#1a1c2c","#1f1f2f","#10111a","#1b1b2f","#12122a"
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
    for (let i=0;i<25;i++){
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${20 + Math.random() * 80}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random()*100}%`;
      bubble.style.left = `${Math.random()*100}%`;
      bubble.style.animationDuration = `${8 + Math.random()*12}s`;
      bubble.onclick = () => {
        const newColors = sectionColors.map(()=>randomColor());
        setSectionColors(newColors);
      }
      container.appendChild(bubble);
    }
  }, []);

  return (
    <main style={{position:"relative"}}>
      <div id="bubble-container" className="bubbles"></div>

      {/* 1. Header */}
      <header style={{background:sectionColors[0],position:"sticky",top:0,padding:"20px 0",zIndex:10}} onClick={()=>handleClickSection(0)}>
        <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:"1.5rem",fontWeight:"bold"}}>AI Assess</div>
          <nav>
            <a href="#features" style={{margin:"0 15px"}}>Features</a>
            <a href="#howitworks" style={{margin:"0 15px"}}>How It Works</a>
            <a href="#pricing" style={{margin:"0 15px"}}>Pricing</a>
            <a href="/login" style={{margin:"0 15px"}}>Login</a>
            <a href="/signup"><button className="button" style={{marginLeft:"10px"}}>Sign Up</button></a>
          </nav>
        </div>
      </header>

      {/* 2. Hero */}
      <section style={{background:sectionColors[1],padding:"120px 20px 80px 20px",textAlign:"center"}} onClick={()=>handleClickSection(1)}>
        <h1 style={{fontSize:"3rem",marginBottom:"20px"}}>Test Your Backend Skills, Get AI Evaluated</h1>
        <p style={{fontSize:"1.25rem",color:"var(--muted)",marginBottom:"30px"}}>
          Showcase your expertise and get hired faster with AI-powered backend assessments.
        </p>
        <a href="/signup"><button className="button">Get Started Free</button></a>
        <a href="#howitworks" style={{marginLeft:"20px"}}><button className="button" style={{background:"var(--secondary)"}}>Learn More</button></a>
      </section>

      {/* 3. Features */}
      <section id="features" style={{background:sectionColors[2],padding:"60px 20px"}} onClick={()=>handleClickSection(2)}>
        <div className="container" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
          {[
            {title:"Real Assessments",desc:"Answer backend challenges designed by experts."},
            {title:"AI Feedback",desc:"Get structured insights and scores instantly."},
            {title:"Career Opportunities",desc:"Share your report with top companies."},
          ].map((f,idx)=>(
            <div key={idx} className="card" style={{width:"30%",margin:"15px",textAlign:"center",padding:"30px"}}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Testimonials */}
      <section style={{background:sectionColors[3],padding:"80px 20px",textAlign:"center"}} onClick={()=>handleClickSection(3)}>
        <h2>What Users Say</h2>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"40px"}}>
          {[
            {text:"This platform transformed how I showcase my backend skills!",author:"Jane D."},
            {text:"AI scoring is incredibly detailed and accurate.",author:"Mike S."},
            {text:"I got hired because of the report this platform generated.",author:"Emma L."},
          ].map((t,idx)=>(
            <div key={idx} className="card" style={{width:"30%",margin:"15px"}}>
              <p>"{t.text}"</p>
              <p style={{fontWeight:"bold",marginTop:"10px"}}>— {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. How It Works */}
      <section style={{background:sectionColors[4],padding:"80px 20px"}} onClick={()=>handleClickSection(4)}>
        <h2 style={{textAlign:"center",marginBottom:"40px"}}>How It Works</h2>
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
          {[
            {step:"1",title:"Sign Up",desc:"Create your account and complete your profile."},
            {step:"2",title:"Take Assessment",desc:"Answer backend challenges designed for real-world skills."},
            {step:"3",title:"Get AI Report",desc:"Receive a detailed AI evaluation with scores and feedback."},
            {step:"4",title:"Share & Get Hired",desc:"Show your report to companies and land opportunities."},
          ].map((s,idx)=>(
            <div key={idx} className="card" style={{width:"22%",margin:"10px",textAlign:"center"}}>
              <h3>{s.step}</h3>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section style={{background:sectionColors[5],padding:"80px 20px",textAlign:"center"}} onClick={()=>handleClickSection(5)}>
        <h2>Start Your Assessment Now</h2>
        <p style={{color:"var(--muted)",marginBottom:"20px"}}>Sign up free and take your first assessment in minutes.</p>
        <a href="/signup"><button className="button">Sign Up Free</button></a>
      </section>

      {/* 7. Pricing */}
      <section id="pricing" style={{background:sectionColors[6],padding:"80px 20px"}} onClick={()=>handleClickSection(6)}>
        <div className="container" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
          {[
            {name:"Basic",price:"$0",features:["1 Assessment","AI Feedback"]},
            {name:"Standard",price:"$29",features:["5 Assessments","Detailed AI Reports","Dashboard"]},
            {name:"Premium",price:"$79",features:["Unlimited Assessments","Advanced AI Insights","Company Sharing"]},
          ].map((p,idx)=>(
            <div key={idx} className="card" style={{width:"30%",margin:"15px",textAlign:"center"}}>
              <h3>{p.name}</h3>
              <h4>{p.price}</h4>
              <ul style={{listStyle:"none",padding:0}}>{p.features.map((f,i)=><li key={i}>{f}</li>)}</ul>
              <button className="button">Choose Plan</button>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Trust */}
      <section style={{background:sectionColors[7],padding:"60px 20px",textAlign:"center"}} onClick={()=>handleClickSection(7)}>
        <h2>Trusted By</h2>
        <p style={{color:"var(--muted)"}}>SSL Secured | GDPR Compliant | Used by Top Tech Companies</p>
      </section>

      {/* 9. FAQ */}
      <section style={{background:sectionColors[8],padding:"80px 20px"}} onClick={()=>handleClickSection(8)}>
        <h2 style={{textAlign:"center"}}>FAQ</h2>
        {[
          {q:"Do I need to pay to try?",a:"No, your first assessment is free."},
          {q:"How is the AI score calculated?",a:"AI evaluates architecture, security, scalability, code quality."},
          {q:"Can companies see my results?",a:"Only if you share your report."},
        ].map((f,idx)=>(
          <div key={idx} className="card" style={{margin:"10px 0"}}>
            <p><strong>{f.q}</strong></p>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {/* 10. Footer */}
      <footer style={{background:sectionColors[9],padding:"40px 0",textAlign:"center",borderTop:"1px solid var(--card)"}} onClick={()=>handleClickSection(9)}>
        <p>&copy; 2026 AI Assess | <a href="#">Privacy</a> | <a href="#">Terms</a></p>
        <p>Follow us: <a href="#">Twitter</a> | <a href="#">LinkedIn</a></p>
      </footer>
    </main>
  );
}
