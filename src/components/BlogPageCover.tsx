import Image, { StaticImageData } from "next/image";

type PageCoverProps = {
  image: StaticImageData | string;
  title: string;
  date: string;
};

const formatBanglaDate = (iso: string) =>
  new Date(iso).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPageCover = ({ image, title, date }: PageCoverProps) => {
  return (
    <div className="relative">
      <div className="relative h-[250px] md:h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gray-900/70 px-4 pb-6 md:pb-10">
        <small className="text-sm text-white md:text-lg">
          {formatBanglaDate(date)}
        </small>
        <h5 className="text-xl font-semibold text-white md:text-[3rem]">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default BlogPageCover;
