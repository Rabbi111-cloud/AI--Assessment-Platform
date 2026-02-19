export default function Home() {
  return (
    <main className="container">
      <h1>AI Backend Developer Assessment Platform</h1>
      <p style={{ marginTop: "12px", color: "var(--muted)" }}>
        Test real backend skills. Get AI-evaluated scores. Get hired faster.
      </p>

      <div style={{ marginTop: "30px" }}>
        <a href="/signup">
          <button className="button">Get Started</button>
        </a>
      </div>
    </main>
  );
}
