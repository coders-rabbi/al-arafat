import BlogCard from "@/components/ui/HomePage/BlogCard/BlogCard";
import DonationForm from "@/components/ui/HomePage/DonationForm/DonationForm";
import EventCard from "@/components/ui/HomePage/EventCard/EventCard";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import NewsLetter from "@/components/ui/HomePage/NewsLetter/NewsLetter";
import { CarouselSize } from "@/components/ui/HomePage/Test/Test";
import UmmahVision from "@/components/ui/HomePage/UmmahVision/UmmahVision";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DonationForm />
      <UmmahVision />
      <EventCard />
      <BlogCard />
      <NewsLetter />
      <CarouselSize />
    </>
  );
};

export default HomePage;
