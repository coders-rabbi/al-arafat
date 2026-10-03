import { TMedia } from "@/types/media";
import { getAllMedia } from "@/service/media";
import MediaLibrary from "./components/MediaLibrary";

const MediaPage = async () => {
  const res = await getAllMedia();
  const media: TMedia[] = res?.data || [];

  return (
    <div className="p-4 md:p-6">
      <MediaLibrary initialMedia={media} />
    </div>
  );
};

export default MediaPage;
