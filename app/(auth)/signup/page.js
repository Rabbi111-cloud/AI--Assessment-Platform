"use client";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";

export default function Signup() {
  const router = useRouter();

  async function handleSignup(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // After signup, redirect to login
      router.push("/login");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <main className="container">
      <div className="card" style={{ maxWidth: "500px", margin: "50px auto", textAlign: "center" }}>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input name="email" type="email" placeholder="Email" required />
          <input name="password" type="password" placeholder="Password" required />
          <button className="button">Sign Up</button>
        </form>
        <p style={{ marginTop: "12px", color: "var(--muted)" }}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </main>
  );
}
