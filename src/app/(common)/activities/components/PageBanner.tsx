import Image, { StaticImageData } from "next/image";

type PageBannerProps = {
  title: string;
  image: StaticImageData;
  alt?: string;
};

const PageBanner = ({ title, image, alt = "banner" }: PageBannerProps) => {
  return (
    <div className="relative h-[250px] w-full overflow-hidden md:h-[400px]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/70">
        <h1 className="text-[2rem] font-bold text-white md:text-[3.5rem]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
