import "@/app/style/globals.scss";
import MobileHeader from "@/components/header/mobile/mobile-header";

import { Mynerve, Handlee } from "next/font/google";

const fontTitle = Mynerve({
  weight: "400",
  subsets: ["latin"],
  variable: "--fontTitle",
  display: "swap",
});

const fontText = Handlee({
  weight: "400",
  subsets: ["latin"],
  variable: "--fontText",
  display: "swap",
});

export const metadata = {
  title: "Fil Etnic",
  description: "Un site qui retrace l'historique de Fil Etnic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontTitle.variable} ${fontText.variable}`}>
      <body>
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
