"use client";
import { useEffect, useState } from "react";
import { firebaseApp } from "../../lib/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

export default function DashboardPage() {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const [sectionColor, setSectionColor] = useState("#111827");
  const [assessments, setAssessments] = useState([]);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  function randomColor() {
    const colors = ["#6366f1","#10b981","#facc15","#f472b6","#22d3ee","#f97316","#818cf8","#a3e635","#f87171","#34d399"];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Load user assessments + AI reports
  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) return;
      try {
        // 1️⃣ Get user assessments
        const q = query(collection(db, "assessments"), where("uid", "==", user.uid));
        const qSnap = await getDocs(q);
        const userAssessments = qSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setAssessments(userAssessments);

        // 2️⃣ Get user reports
        const r = query(collection(db, "reports"), where("uid", "==", user.uid));
        const rSnap = await getDocs(r);
        const userReports = rSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReports(userReports);
      } catch (err) {
        alert(err.message);
      } finally { setLoading(false); }
    };

    fetchData();

    // 3️⃣ Bubble background
    const container = document.getElementById("bubble-container");
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.width = `${20 + Math.random() * 50}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.top = `${Math.random() * 100}%`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${6 + Math.random() * 8}s`;
      bubble.onclick = () => setSectionColor(randomColor());
      container.appendChild(bubble);
    }
  }, []);

  return (
    <main style={{ position: "relative", background: sectionColor, minHeight: "100vh", padding: "60px 20px" }}>
      <div id="bubble-container" className="bubbles"></div>

      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Welcome, {auth.currentUser?.email || "User"}!
      </h1>

      {loading ? (
        <p style={{ textAlign: "center" }}>Loading assessments and AI reports...</p>
      ) : assessments.length === 0 ? (
        <p style={{ textAlign: "center" }}>No assessments yet. Take one to see your AI report!</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {assessments.map((a, idx) => {
            const report = reports.find(r => r.assessmentId === a.id);
            return (
              <div
                key={idx}
                style={{
                  background: randomColor(),
                  padding: "20px",
                  borderRadius: "16px",
                  width: "300px",
                  minHeight: "200px",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onClick={() => setSectionColor(randomColor())}
              >
                <h3>Assessment {idx + 1}</h3>
                <p><strong>Submitted:</strong> {a.submittedAt?.toDate()?.toLocaleString() || "Unknown"}</p>
                {report ? (
                  <>
                    <p><strong>Score:</strong> {report.score || "N/A"}/100</p>
                    <details>
                      <summary>AI Feedback</summary>
                      <p>{report.aiResult}</p>
                    </details>
                  </>
                ) : (
                  <p>Awaiting AI evaluation...</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          className="button"
          onClick={() => alert("Future: Start a new assessment")}
        >
          Take New Assessment
        </button>
      </div>
    </main>
  );
}
