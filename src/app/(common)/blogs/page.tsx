import PageCover from "@/components/pageCover";
import image from "@/assets/images/blog-banner.jpeg";
import BlogCard from "./components/blogCard";
import HorizontalCard from "./components/horizontalCard";
import { getAllBlogsSafe } from "@/service/blog";

// Build-er shomoy API call hobe na, user page khulle hobe
export const dynamic = "force-dynamic";

const page = async () => {
  const blogs = await getAllBlogsSafe();

  return (
    <div>
      <PageCover image={image} title="Blogs" />

      {blogs.length === 0 ? (
        <p className="my-20 text-center text-gray-500">No blogs found.</p>
      ) : (
        <>
          <div className="mx-auto mb-10 mt-20 max-w-6xl space-y-6">
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
              <BlogCard
                key={item._id}
                blog={item}
                href={`/blogs/${item._id}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
