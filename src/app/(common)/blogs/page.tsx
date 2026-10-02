import PageCover from "@/components/pageCover";
import image from "@/assets/images/blog-banner.jpeg";
import BlogCard from "./components/blogCard";
import { getAllPosts } from "@/service/post";
import HorizontalCard from "./components/horizontalCard";

const page = async () => {
  const res = await getAllPosts();
  const blogs = res.data;
  return (
    <div>
      <PageCover image={image} title="Blogs" />

      <div className="space-y-6 max-w-6xl mx-auto mb-10 mt-20">
        {blogs.slice(0, 1).map((blog) => (
          <HorizontalCard
            key={blog._id}
            item={blog}
            href={`/blogs/${blog._id}`}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {blogs.slice(1).map((item) => (
          <BlogCard key={item?._id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
