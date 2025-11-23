import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLDT Voice Avatar Demo - Mascot Bot SDK",
  description: "MVP app demonstrating PLDT voice AI integration with Mascot Bot SDK for real-time animated avatars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
