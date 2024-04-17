"use client";
//Context
import { FiltersProvider } from "./context";
//Components
import Header from "./ui/components/Header";
//styles
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mango</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <FiltersProvider>
          <Header />
          {children}
        </FiltersProvider>
      </body>
    </html>
  );
}
