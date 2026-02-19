"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../../../lib/firebase";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";

export default function DeveloperDashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/login");
    } else {
      getDoc(doc(db, "users", user.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      });
    }
  }, [router]);

  if (!userData) return <p className="container">Loading...</p>;

  return (
    <main className="container">
      <h1>Welcome, {userData.name}!</h1>
      <p style={{ color: "var(--muted)" }}>Start your backend assessment and track your AI-evaluated progress.</p>

      <div className="card" style={{ marginTop: "30px" }}>
        <button className="button" onClick={() => router.push("/assessment")}>Start Assessment</button>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <p><strong>Role:</strong> {userData.role}</p>
        <p><strong>Experience:</strong> {userData.experience} years</p>
        <p><strong>Skills:</strong> {userData.skills}</p>
        <p><strong>Bio:</strong> {userData.bio}</p>
      </div>
    </main>
  );
}
