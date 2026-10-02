import PageCover from "@/components/pageCover";
import image from "@/assets/images/blog-banner.jpeg";
import BlogCard from "./components/blogCard";
import { getAllPosts } from "@/service/post";

const page = async () => {
  const res = await getAllPosts();
  const blogs = res.data;
  return (
    <div>
      <PageCover image={image} title="Blogs" />
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((item) => (
          <BlogCard key={item?._id} blog={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
