import PageHeader from "@/app/(dashboard)/components/PageHeader";
import CreateBlogForm from "../components/blogCreateForm";

export default function CreatePostPage() {
  return (
    <div className="mx-auto space-y-5">
      <PageHeader
        title="Create New Blog Post"
        description="Fill in the details to publish a new project post."
        actionLabel="← Back to Posts"
        actionHref="/dashboard/blog"
      />
      <CreateBlogForm />
    </div>
  );
}
