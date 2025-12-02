import "./globals.css";

export const metadata = {
  title: "Explain AI - Turn Code into Insight",
  description: "AI-powered code explanation platform that translates complex code snippets into clear, human-friendly explanations tailored to different expertise levels. Powered by Google Gemini AI.",
  keywords: ["code explanation", "AI", "Gemini", "code learning", "programming", "developer tools"],
  authors: [{ name: "Abdi Frost", url: "https://abdifrost.vercel.app" }],
  creator: "Abdi Frost",
  openGraph: {
    type: "website",
    title: "Explain AI - Turn Code into Insight",
    description: "AI-powered code explanation platform for developers at all levels",
    siteName: "Explain AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explain AI - Turn Code into Insight",
    description: "AI-powered code explanation platform for developers at all levels",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}
