import { getAllPosts } from "@/service/post";
import PageHeader from "./components/PageHeader";
import PostsTable from "./components/PostTable";

// Real API connect korar somoy:
// import { getAllPosts } from "@/lib/services/post.service";
// const res = await getAllPosts();
// const posts = res.data;

export default async function ProjectsPage() {
    const res = await getAllPosts();
    const posts = res.data;

  return (
    <div className="space-y-5">
      <PageHeader
        title="Projects"
        description="Manage all your project posts."
        actionLabel="+ New Post"
        actionHref="/dashboard/posts/create-post"
      />

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="font-semibold">Previous Posts</h2>
        <p className="mb-4 text-xs text-gray-500">
          Showing {posts?.length} recent posts
        </p>
        <PostsTable posts={posts} />
      </section>
    </div>
  );
}
