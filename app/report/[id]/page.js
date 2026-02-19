"use client";

import { useEffect, useState } from "react";
import { db, auth } from "../../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";

export default function ReportPage() {
  const params = useParams();
  const [report, setReport] = useState(null);

  useEffect(() => {
    async function fetchReport() {
      try {
        const docRef = doc(db, "reports", params.id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setReport(docSnap.data().aiResult);
        } else {
          alert("Report not found");
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchReport();
  }, [params.id]);

  if (!report) return <p className="container">Loading report...</p>;

  return (
    <main className="container">
      <h1>Assessment Report</h1>
      <div className="card">
        <p><strong>Overall Score:</strong> {report.overallScore}</p>
        <p><strong>Architecture:</strong> {report.architecture}</p>
        <p><strong>Security:</strong> {report.security}</p>
        <p><strong>Scalability:</strong> {report.scalability}</p>
        <p><strong>Clean Code:</strong> {report.cleanCode}</p>
        <p><strong>AI Feedback:</strong> {report.feedback}</p>
      </div>
    </main>
  );
}
