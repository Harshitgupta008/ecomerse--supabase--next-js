import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Navbar />
      <div className="mt-20 lg:mt-28">
        {children}
      </div>
      <Footer />
    </>

  );   
}
