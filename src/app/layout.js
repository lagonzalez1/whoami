import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HomepageToolbar from "./Components/Toolbar/HomepageToolbar";
import HomepageFooter from "./Components/Footer/HomepageFooter";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Who am i",
  description: "IAM Luis",
  icons: { icon: [], apple: [] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" data-theme="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Fixed header spanning full width */}
        <header className="sticky top-0 z-[100] w-full">
          <HomepageToolbar />
        </header>

        {/* Main grows and clears the header */}
        <main className="flex-1 pt-16">
          <div>
            {children}
          </div>
        </main>
        <HomepageFooter />
      </body>
    </html>
  );
}