import "./globals.css";

export const metadata = {
  title: "AI Backend Developer Assessment",
  description: "AI-powered backend developer testing platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
