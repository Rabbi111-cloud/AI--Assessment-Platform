"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [role, setRole] = useState("developer");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      router.push("/login");
    } else {
      // Load existing profile if any
      getDoc(doc(db, "users", user.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setRole(data.role || "developer");
          setExperience(data.experience || "");
          setSkills(data.skills || "");
          setBio(data.bio || "");
        }
        setLoading(false);
      });
    }
  }, [router]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const user = auth.currentUser;

    await setDoc(doc(db, "users", user.uid), {
      name,
      role,
      experience,
      skills,
      bio,
      email: user.email,
      uid: user.uid,
      createdAt: Date.now()
    });

    router.push("/dashboard/developer");
  }

  if (loading) return <p className="container">Loading...</p>;

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: "600px", margin: "50px auto" }}>
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="developer">Developer</option>
            <option value="company">Company</option>
          </select>
          <input value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="Experience (years)" required />
          <input value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="Skills (comma separated)" required />
          <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Short Bio" rows={4}></textarea>
          <button className="button">Save Profile</button>
        </form>
      </div>
    </main>
  );
}
