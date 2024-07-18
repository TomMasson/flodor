import {
  Gochi_Hand,
  Mynerve,
  Reenie_Beanie,
  Sedgwick_Ave_Display,
  Handlee,
} from "next/font/google";

const font1 = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const font2 = Mynerve({
  weight: "400",
  subsets: ["latin"],
  variable: "--font2",
  display: "swap",
});

const font3 = Reenie_Beanie({
  weight: "400",
  subsets: ["latin"],
  variable: "--font3",
  display: "swap",
});

const font4 = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font4",
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
    <html
      lang="en"
      className={`${font1.variable} ${font2.variable} ${font3.variable} ${font4.variable} ${fontText.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
