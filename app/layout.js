import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { montserrat, raleway, grotesque, playfair } from "./utils/fonts";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VOICE OF THE PEOPLE PARTY",
  description: "TO REVIVE, TO RESTORE & TO TRANSFORM",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${raleway} ${montserrat} ${grotesque} ${playfair}`}>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          {children}
          <Footer />

        </main>
      </body>
    </html>
  );
}
