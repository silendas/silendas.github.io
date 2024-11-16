import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhamad Yasmin Nul Hakim - Portfolio",
  description: "Muhamad Yasmin Nul Hakim Portfolio",
  icons: {
    icon: [
      {
        url: "/assets/icon/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
