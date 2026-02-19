export default function DeveloperDashboard() {
  return (
    <main className="container">
      <h1>Developer Dashboard</h1>
      <p style={{ color: "var(--muted)" }}>
        Start your backend assessment and get AI-evaluated.
      </p>

      <div className="card" style={{ marginTop: "20px" }}>
        <button className="button">Start Assessment</button>
      </div>
    </main>
  );
}
