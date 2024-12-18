import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Next.js Blog Platform',
  description: 'A dynamic blog platform built with Next.js 15, TypeScript, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-2xl font-bold">My Blog</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
