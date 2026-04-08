import DonationForm from "@/components/UI/HomePage/DonationForm/DonationForm";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import NewsLetter from "@/components/UI/HomePage/NewsLetter/NewsLetter";
import UmmahVision from "@/components/UI/HomePage/UmmahVision/UmmahVision";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DonationForm />
      <UmmahVision />
      <NewsLetter />
    </>
  );
};

export default HomePage;
