import { Playfair_Display, Work_Sans, Cinzel } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-light",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans-light",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-logo",
  display: "swap",
});

export default function BlancoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${playfair.variable} ${workSans.variable} ${cinzel.variable} theme-light min-h-screen`}>
      {children}
    </div>
  );
}
