"use client";

import { useState } from "react";

export default function AssessmentPage() {
  const [answer, setAnswer] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // For now, just alert
    alert("Submitted: " + answer + "\nAI evaluation will run on server.");
    // Later: call /api/evaluate
  }

  return (
    <main className="container">
      <h1>Backend Assessment</h1>
      <p style={{ color: "var(--muted)" }}>
        Answer the questions below:
      </p>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>1. Describe a scalable REST API design:</label>
          <br /><br />
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={6}
            style={{ width: "100%", padding: "10px" }}
            required
          />
          <br /><br />
          <button className="button">Submit Assessment</button>
        </form>
      </div>
    </main>
  );
}
