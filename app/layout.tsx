import "./globals.css";
import "./swiper.css";
import "swiper/css/pagination";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jelly fish mobile",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white-ghost`}>{children}</body>
    </html>
  );
}
