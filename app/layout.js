import { Outfit  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const outfit = Outfit({ subsets: ["latin"]});



export const metadata = {
  title: "Home Page - Fruits Ecommerce",
  description: "Este website is for Ecoomerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
