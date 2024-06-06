import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/layout";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next"


export const metadata: Metadata = {
  title: "Coffi",
  description: "A all-in-one tool for coworking management",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options)
  return (
    <html lang="en" className="overscroll-none">
      <body>
        <Layout user={session?.user}>
          {children}
        </Layout>
        </body>
    </html>
  );
}
