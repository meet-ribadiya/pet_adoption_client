import Footer from "@/components/common/Footer";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/common/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Pet Adoption",
  description: "Adopt your favorite pet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">

        <AuthProvider>
          <Toaster position="top-right" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}