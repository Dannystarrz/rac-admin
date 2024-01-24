'use client';
import "./globals.css";



export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className="font-roboto h-screen">
        {children}
      </body>
    </html>
  
  );
}
