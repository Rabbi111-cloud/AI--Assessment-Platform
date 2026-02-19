"use client";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Login() {
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      // Check if user has profile info
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists() || !docSnap.data().name) {
        // If profile incomplete, redirect to profile page
        router.push("/profile");
      } else {
        router.push("/dashboard/developer");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button className="button">Login</button>
        </form>
        <p style={{ marginTop: "12px", color: "var(--muted)" }}>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </main>
  );
}
