export async function POST(req) {
  // In real scenario, send answers to AI API
  const data = await req.json();
  
  // Example AI response
  const aiResult = {
    overallScore: 820,
    architecture: 85,
    security: 70,
    scalability: 90,
    cleanCode: 80,
    feedback: "Your backend design is solid, but improve security and error handling."
  };

  return new Response(JSON.stringify(aiResult), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
