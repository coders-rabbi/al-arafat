import { TPost } from "@/types/post";
import { getYouTubeId } from "@/lib/youtube";
import InfoListCard from "./Infolistcard";

type ActivityDetailsProps = {
  data: TPost;
};

/**
 * projectAim / benificiary / expense_details ফিল্ড থেকে লিস্ট বানানো হয়।
 * HTML (<li>) থাকলে প্রতিটি <li> একটি আইটেম, না থাকলে প্রতিটি নতুন লাইন একটি আইটেম।
 */
const toList = (value?: string): string[] => {
  if (!value) return [];

  const liMatches = Array.from(value.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi));
  const parts = liMatches.length
    ? liMatches.map((m) => m[1])
    : value.split(/\r?\n|<br\s*\/?>|<\/p>/i);

  return parts
    .map((s) =>
      s
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/^[\s•\-*]+/, "")
        .trim(),
    )
    .filter(Boolean);
};

const ActivityDetails = ({ data }: ActivityDetailsProps) => {
  const youtubeId = getYouTubeId(data?.videoUrl ?? "");
  const firstImage = data?.imageUrl?.[0];

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-2 lg:px-10">
      {/* বাম পাশ: বিবরণ */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          কার্যক্রমের বিবরণ
        </h2>

        {/* ভিডিও থাকলে ভিডিও, না থাকলে imageUrl এর প্রথম ছবি */}
        {youtubeId ? (
          <div className="mb-5 aspect-video w-full overflow-hidden rounded-xl bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={data?.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : (
          firstImage && (
            <div className="mb-5 aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={firstImage}
                alt={data?.title ?? ""}
                className="h-full w-full object-cover"
              />
            </div>
          )
        )}

        {data?.content && (
          <div
            className="text-sm leading-7 text-gray-600 [&_a]:text-[#008e48] [&_a]:underline [&_h1]:mb-3 [&_h1]:text-xl [&_h1]:font-bold [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mb-2 [&_h3]:font-semibold [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        )}
      </div>

      {/* ডান পাশ: সাইডবার কার্ড */}
      <aside className="space-y-5 self-start">
        <InfoListCard
          title="প্রকল্পের লক্ষ্য-উদ্দেশ্য"
          items={toList(data?.projectAim)}
        />
        <InfoListCard title="কোর্সের বিবরণ" items={toList(data?.benificiary)} />
        <InfoListCard
          title="ব্যয়ের খাত"
          items={toList(data?.expense_details)}
        />
      </aside>
    </div>
  );
};

export default ActivityDetails;
