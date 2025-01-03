import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter, Junge } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const junge = Junge({
  weight: "400",
  display: "swap",
  variable: "--font-junge",
});

export const metadata = {
  title: "YUAI",
  description: "Your University AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${junge.variable}`}>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
