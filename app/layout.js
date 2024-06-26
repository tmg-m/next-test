import { Inter } from "next/font/google";
import "./tailwind.css";
import MainNav from "./Components/NavBar/MainNav";
import { AppWrapper } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Test Next",
  description: "App generation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-b fixed w-full backdrop-blur-md z-50">
          <MainNav />
        </div>
        <AppWrapper>
          <div className="pt-16">{children}</div>
        </AppWrapper>
      </body>
    </html>
  );
}
