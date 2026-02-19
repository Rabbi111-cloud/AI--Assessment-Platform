"use client";
import { useState, useEffect } from "react";
import { firebaseApp } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AssessmentPage() {
  const [sectionColor,setSectionColor] = useState("#111827");
  const [answers,setAnswers] = useState(["","",""]);
  const [loading,setLoading] = useState(false);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const router = useRouter();

  function randomColor() {
    const colors = ["#6366f1","#10b981","#facc15","#f472b6","#22d3ee","#f97316","#818cf8","#a3e635","#f87171","#34d399"];
    return colors[Math.floor(Math.random()*colors.length)];
  }

  useEffect(()=>{
    const container = document.getElementById("bubble-container");
    if(!container) return;
    for(let i=0;i<15;i++){
      const bubble = document.createElement("div");
      bubble.className="bubble";
      bubble.style.width=`${20+Math.random()*50}px`;
      bubble.style.height=bubble.style.width;
      bubble.style.top=`${Math.random()*100}%`;
      bubble.style.left=`${Math.random()*100}%`;
      bubble.style.animationDuration=`${6+Math.random()*8}s`;
      bubble.onclick=()=>setSectionColor(randomColor());
      container.appendChild(bubble);
    }
  },[]);

  const handleChange = (idx,e) => {
    const newAnswers = [...answers];
    newAnswers[idx] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if(!user) return alert("Please login!");
    setLoading(true);

    try {
      // 1️⃣ Save answers to Firestore
      const docRef = await addDoc(collection(db,"assessments"),{
        uid: user.uid,
        answers,
        submittedAt: serverTimestamp()
      });

      // 2️⃣ Call OpenRouter API for AI evaluation
      const prompt = `Evaluate these backend developer answers and give a score 0-100 with feedback:\n\n${answers.join("\n")}`;
      const apiRes = await fetch("https://openrouter.ai/api/v1/completions", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer YOUR_OPENROUTER_API_KEY"
        },
        body: JSON.stringify({
          model:"gpt-4.1-mini",
          prompt,
          max_tokens:300
        })
      });

      const aiData = await apiRes.json();
      const aiResult = aiData.choices[0].text;

      // 3️⃣ Save AI result to Firestore
      await addDoc(collection(db,"reports"),{
        uid:user.uid,
        assessmentId:docRef.id,
        aiResult,
        score: parseInt(aiResult.match(/\d{1,3}/)?.[0]||"0")
      });

      alert("Assessment submitted! Check your dashboard for AI report.");
      router.push("/dashboard");

    } catch(err){ alert(err.message); }
    setLoading(false);
  };

  return (
    <main style={{position:"relative",background:sectionColor,minHeight:"100vh"}}>
      <div id="bubble-container" className="bubbles"></div>
      <section style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"60px 20px"}}>
        <form onSubmit={handleSubmit} style={{background:"#111827",padding:"40px",borderRadius:"16px",minWidth:"300px",maxWidth:"600px"}}>
          <h2 style={{marginBottom:"20px",textAlign:"center"}}>Backend Assessment</h2>
          {answers.map((a,idx)=>(
            <div key={idx} style={{marginBottom:"16px"}}>
              <label>Question {idx+1}</label>
              <textarea value={a} onChange={(e)=>handleChange(idx,e)} rows={4} placeholder="Write your answer..." required />
            </div>
          ))}
          <button type="submit" className="button">{loading?"Submitting...":"Submit Assessment"}</button>
        </form>
      </section>
    </main>
  );
}
