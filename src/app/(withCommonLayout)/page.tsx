import BlogCard from "@/components/ui/HomePage/blogCard/blogCard";
import DonationForm from "@/components/ui/HomePage/donationForm/donationForm";
import { EventCarousel } from "@/components/ui/HomePage/eventCarousel/eventCarousel";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import NewsLetter from "@/components/ui/HomePage/newsLetter/newsLetter";
import UmmahVision from "@/components/ui/HomePage/ummahVision/ummahVision";

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
