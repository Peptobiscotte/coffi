import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/layout";


export const metadata: Metadata = {
  title: "Coffi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
        </body>
    </html>
  );
}
