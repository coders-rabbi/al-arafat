import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CommonLayout;
