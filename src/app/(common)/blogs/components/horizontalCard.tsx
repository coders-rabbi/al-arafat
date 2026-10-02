import { TPost } from "@/types/post";
import Image from "next/image";
import Link from "next/link";

type HorizontalCardProps = {
  item: TPost;
  href?: string; // dile pura card clickable hobe
};

// Bangla format: "১ সেপ্টেম্বর, ২০২৬"
const formatBanglaDate = (iso: string) =>
  new Date(iso).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const HorizontalCard = ({ item, href }: HorizontalCardProps) => {
  const image = item.imageUrl?.[0];

  const card = (
    <article className="flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md md:flex-row md:items-stretch">
      {/* Left: image */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-tl-xl rounded-bl-xl bg-gray-100 md:aspect-auto md:min-h-72 md:w-[46%]">
        {image ? (
          <Image
            src={image}
            alt={item.title}
            fill
            unoptimized
            className="object-cover"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="flex flex-1 flex-col justify-center gap-4 py-2 md:px-6">
        <h2 className="line-clamp-2 text-2xl font-bold leading-snug text-gray-900">
          {item.title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: item?.content }}
          className="line-clamp-3"
        />
        <small className="mt-4 text-sm text-gray-500">
          {formatBanglaDate(item.createdAt)}
        </small>
      </div>
    </article>
  );

  return href ? (
    <Link href={href} className="block">
      {card}
    </Link>
  ) : (
    card
  );
};

export default HorizontalCard;
