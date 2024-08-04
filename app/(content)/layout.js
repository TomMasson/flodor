import "@/app/style/globals.scss";
import MainHeader from "@/components/header/main-header";
import MobileHeader from "@/components/header/mobile/mobile-header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fil Etnic",
  description: "Un site qui retrace l'historique de la marque Fil Etnic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileHeader />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
