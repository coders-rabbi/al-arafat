import BlogCard from "@/components/ui/HomePage/BlogCard/blogCard";
import DonationForm from "@/components/ui/HomePage/DonationForm/donationForm";
import { EventCarousel } from "@/components/ui/HomePage/EventCarousel/eventCarousel";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";
import UmmahVision from "@/components/ui/HomePage/UmmahVision/UmmahVision";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DonationForm />
      <UmmahVision />
      <EventCarousel/>
      <BlogCard />
      <NewsLetter/>
      {/* <CarouselSize /> */}
    </>
  );
};

export default HomePage;
