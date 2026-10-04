import Image from "next/image";
import { Rocket } from "lucide-react";
import emergencyRelif from "@/assets/images/emergency-relief.webp";
import { getAllPosts } from "@/service/post";
import Link from "next/link";

// getAllPosts এর রিটার্ন টাইপ থেকে একটি পোস্টের টাইপ বের করা হয়েছে।
// আপনার প্রজেক্টে আলাদা টাইপ (যেমন TPost) থাকলে সেটি ইমপোর্ট করে এখানে বসাতে পারেন।
export type TActivityPost = NonNullable<
  Awaited<ReturnType<typeof getAllPosts>>["data"]
>[number];

type ActivityCardProps = {
  item: TActivityPost;
  href: string;
};

const ActivityCard = ({ item, href }: ActivityCardProps) => {
  const card = (
    <div className="flex h-full cursor-pointer flex-col overflow-hidden rounded-[20px] bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative h-[220px] w-full">
        <Image
          src={item?.imageUrl?.[0] || emergencyRelif}
          alt={item?.title}
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="mb-2.5 flex items-center gap-1.5 text-sm font-medium text-[#D08545]">
          <Rocket className="h-4 w-4" /> Regular Activities
        </p>

        <h2 className="mb-1.5 line-clamp-2 text-xl font-bold text-gray-900">
          {item?.title}
        </h2>

        <div
          dangerouslySetInnerHTML={{ __html: item?.content }}
          className="line-clamp-3"
        />

        <p className="mt-auto rounded-sm border border-[#008e48] bg-[#008e470b] py-2 text-center">
          View Details
        </p>
      </div>
    </div>
  );
  return href ? (
    <Link href={href} className="block">
      {card}
    </Link>
  ) : (
    card
  );
};

export default ActivityCard;
