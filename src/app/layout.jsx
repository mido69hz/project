import { Header } from "@/components/Header";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const workSans = Work_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${workSans.className}`}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
