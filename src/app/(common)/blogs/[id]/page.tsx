import BlogPageCover from "@/components/BlogPageCover";
import ShareButton from "@/components/ShareButton";
import { getSingleBlog } from "@/service/blog";
import Image from "next/image";
import Link from "next/link";
import BlogImageGallery from "../components/blogImageGallery";

const splitHtml = (html: string = "", parts = 3): string[] => {
  const blocks = html.split(/(?<=<\/p>)/i).filter((b) => b.trim());
  const size = Math.ceil(blocks.length / parts);

  return Array.from({ length: parts }, (_, i) =>
    blocks.slice(i * size, (i + 1) * size).join(""),
  );
};

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const res = await getSingleBlog(id);
  const blog = res?.data;

  const [firstPortion, secondPortion, thirdPortion] = splitHtml(blog?.content);

  return (
    <div>
      <BlogPageCover
        image={blog?.images?.[0]}
        title={blog?.title}
        date={blog?.createdAt}
      />

      <div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-8 max-w-6xl mx-auto">
        <div className="prose max-w-none px-4 py-8 xl:col-span-8 xl:px-0">
          <div dangerouslySetInnerHTML={{ __html: firstPortion }} />

          <BlogImageGallery images={blog?.images?.slice(0, 3) ?? []} />

          <div
            dangerouslySetInnerHTML={{ __html: secondPortion }}
            className="mt-4"
          />

          <BlogImageGallery images={blog?.images?.slice(3, 6) ?? []} />

          <div
            dangerouslySetInnerHTML={{ __html: thirdPortion }}
            className="mt-4"
          />
        </div>

        <aside className="px-4 py-8 xl:col-span-4 xl:px-0">
          <div className="flex items-center justify-between gap-2 mb-4 bg-gray-500/70 p-4 rounded-lg">
            <h2 className="text-white font-semibold">শেয়ার করুনঃ </h2>
            <ShareButton
              url={`https://alarafatfoundation.org/blogs/${blog?._id}`}
              title={blog?.title}
            />
          </div>

          <div className="bg-[#008e48] p-4 rounded-lg">
            <h2 className="text-2xl text-center text-white font-semibold mb-4">
              আপনার হাত ধরেই আসুক পরিবর্তন
            </h2>
            <div className="flex flex-col gap-2">
              <Link
                href="/donate"
                className="bg-[#eeb84c]  py-2 px-4 rounded-lg hover:bg-[#eeb84cf3] transition-colors w-full text-center block"
              >
                দান করুন
              </Link>
              <Link
                href="/donate"
                className="bg-white  py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors w-full text-center block"
              >
                স্বেচ্ছাসেবক হোন
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default page;
