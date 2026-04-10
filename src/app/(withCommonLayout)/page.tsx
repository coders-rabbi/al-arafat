import BlogCard from "@/components/UI/HomePage/BlogCard/BlogCard";
import DonationForm from "@/components/UI/HomePage/DonationForm/DonationForm";
import EventCard from "@/components/UI/HomePage/EventCard/EventCard";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import NewsLetter from "@/components/UI/HomePage/NewsLetter/NewsLetter";
import UmmahVision from "@/components/UI/HomePage/UmmahVision/UmmahVision";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DonationForm />
      <UmmahVision />
      <EventCard />
      <NewsLetter />
      <BlogCard />
    </>
  );
};

export default HomePage;
