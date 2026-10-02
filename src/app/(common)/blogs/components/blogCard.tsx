import { TBlog } from "@/types/blog";
import { formatDate } from "@/utils/DateFormate";
import Image from "next/image";

type BlogCardProps = {
  blog: TBlog;
};

const BlogCard = ({ blog }: BlogCardProps) => {
  const image = blog.images?.[0];

  return (
    <div className="rounded-xl border border-gray-50 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-video bg-gray-100 ">
        {image ? (
          <Image
            src={image}
            alt={blog.title}
            fill
            unoptimized
            className="object-cover overflow-hidden rounded-t-xl"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm text-gray-400">
            No image
          </div>
        )}
      </div>
      <div className="my-4 flex flex-col gap-2 p-4">
        <h2 className="text-xl font-semibold line-clamp-2">{blog.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: blog?.content }}
          className="line-clamp-3"
        />
        <small>{formatDate(blog.createdAt)}</small>
      </div>
    </div>
  );
};

export default BlogCard;
