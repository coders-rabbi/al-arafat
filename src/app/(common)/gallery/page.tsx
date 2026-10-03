import banner from "@/assets/images/about-us.jpg";
import GalleryTabs from "@/components/GalleryTabs";
import PageCover from "@/components/pageCover";
import { getAllMedia } from "@/service/media";

const Page = async () => {
  // backend fail korleo page jate na bhange
  const res = await getAllMedia().catch(() => null);
  const items = res?.data || [];

  return (
    <div>
      <PageCover image={banner} title="Gallery" />
      <GalleryTabs items={items} />
    </div>
  );
};

export default Page;
