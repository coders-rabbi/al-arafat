import banner from "@/assets/images/about-us.jpg";
import GalleryTabs from "@/components/GalleryTabs";
import PageCover from "@/components/pageCover";

const Page = () => {
  return (
    <div>
      <PageCover image={banner} title="Gallery" />
      <GalleryTabs />
    </div>
  );
};

export default Page;
