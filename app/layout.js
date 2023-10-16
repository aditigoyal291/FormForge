import "./../styles/globals.css"
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "800", "900"],
});

export const metadata = {
  title: "Form Forege",
  description: "Create forms for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-background`}>{children}</body>
    </html>
  );
}
