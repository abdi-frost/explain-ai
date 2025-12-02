import "./globals.css";

const SITE_TITLE = "Explain AI - Turn Code into Insight";
const SITE_DESCRIPTION = "AI-powered code explanation platform that translates complex code snippets into clear, human-friendly explanations tailored to different expertise levels. Powered by Google Gemini AI.";

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ["code explanation", "AI", "Gemini", "code learning", "programming", "developer tools"],
  authors: [{ name: "Abdi Frost", url: "https://abdifrost.vercel.app" }],
  creator: "Abdi Frost",
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Explain AI",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
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
