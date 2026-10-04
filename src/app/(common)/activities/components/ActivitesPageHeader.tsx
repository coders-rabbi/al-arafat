import { TPost } from "@/types/post";

type PageHeaderProps = {
  data: TPost;
};

/* ছোট বৃত্তগুলোর সাইজ ও অবস্থান (বড় স্ক্রিনে) */
const smallCircles = [
  "left-[22%] top-[6%] h-[120px] w-[120px] lg:h-[140px] lg:w-[140px]",
  "left-[2%] top-[34%] h-[190px] w-[190px] lg:h-[230px] lg:w-[230px]",
  "left-[30%] bottom-[2%] h-[95px] w-[95px] lg:h-[115px] lg:w-[115px]",
];

/* content এ HTML থাকে, হেডারে শুধু প্লেইন টেক্সট দেখানোর জন্য ট্যাগ বাদ দেওয়া হচ্ছে */
const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export default function ActivitePageHeader({ data }: PageHeaderProps) {
  const images = data?.imageUrl ?? [];
  const [mainImage, ...smallImages] = images;
  const backgroundImage = mainImage;
  const description = data?.content ? stripHtml(data.content) : "";

  return (
    <section className="relative isolate overflow-hidden bg-emerald-950">
      {/* ব্যাকগ্রাউন্ড ছবি + গাঢ় সবুজ ওভারলে */}
      {backgroundImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-emerald-950/80" />

      <div className="mx-auto grid min-h-[300px] max-w-7xl items-center gap-8 px-6 py-14 md:min-h-[420px] md:grid-cols-2 lg:px-10">
        {/* বাম পাশ: লেখা */}
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl md:leading-[1.25]">
            {data?.title}
          </h1>

          {description && (
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/90 md:text-base">
              {description}
            </p>
          )}
        </div>

        {/* ডান পাশ: বৃত্তাকার ছবি (শুধু মিডিয়াম স্ক্রিন থেকে দেখাবে) */}
        {mainImage && (
          <div className="relative hidden h-[420px] md:block">
            {/* ড্যাশড রিং */}
            <div className="absolute -right-24 top-0 h-[480px] w-[480px] rounded-full border-[3px] border-dashed border-white lg:-right-28 lg:h-[520px] lg:w-[520px]" />

            {/* বড় বৃত্ত */}
            <div className="absolute -right-20 top-6 h-[440px] w-[440px] overflow-hidden rounded-full lg:-right-24 lg:h-[480px] lg:w-[480px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={mainImage}
                alt={data?.title ?? ""}
                className="h-full w-full object-cover"
              />
            </div>

            {/* ছোট বৃত্ত (২য়, ৩য়, ৪র্থ ছবি) */}
            {smallImages.slice(0, 3).map((src, i) => (
              <div
                key={src + i}
                className={`absolute overflow-hidden rounded-full border-4 border-white shadow-lg ${smallCircles[i]}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`${data?.title ?? ""} - ${i + 2}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
