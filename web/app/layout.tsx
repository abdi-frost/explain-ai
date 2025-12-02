import "./globals.css";

export const metadata = {
  title: "Fresh Start",
  description: "A clean slate for your Next.js project",
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
