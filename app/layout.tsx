import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "Muhamad Yasmin Nul Hakim - Portfolio",
  description: "Muhamad Yasmin Nul Hakim Portfolio",
  icons: {
    icon: [
      {
        url: "assets/icon/icon.png",
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
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1F2937', 
              color: '#fff',
              border: '1px solid #374151',
            },
            success: {
              iconTheme: {
                primary: '#10B981',
                secondary: '#1F2937',
              },
            },
            error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#1F2937',
              },
            },
          }}
        />
      </body>
    </html>
  );
}
