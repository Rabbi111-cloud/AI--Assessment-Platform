"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../lib/firebase";

export default function Signup() {
  async function handleSignup(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email,
      role: "developer",
      createdAt: Date.now()
    });

    window.location.href = "/dashboard/developer";
  }

  return (
    <main className="container">
      <div className="card">
        <h2>Create Account</h2>

        <form onSubmit={handleSignup}>
          <input name="email" placeholder="Email" required />
          <br /><br />
          <input name="password" type="password" placeholder="Password" required />
          <br /><br />
          <button className="button">Sign Up</button>
        </form>
      </div>
    </main>
  );
}
