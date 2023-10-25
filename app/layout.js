import { Provider } from "@/components/Provider";
import "./../styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "800", "900"],
});

export const metadata = {
  title: "Form Forge",
  description: "Create forms for free",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV && (
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9615068362549302"
            crossorigin="anonymous"></script>
        )}
      </head>

      <body className={`${poppins.className} bg-background`}>
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </Provider>
      </body>
    </html>
  );
}
