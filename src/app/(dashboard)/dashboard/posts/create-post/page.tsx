
import PageHeader from "../components/PageHeader";
import CreatePostForm from "./components/CreatePostForm";
export default function CreatePostPage() {
  return (
    <div className="mx-auto space-y-5">
      <PageHeader
        title="Create New Post"
        description="Fill in the details to publish a new project post."
        actionLabel="← Back to Posts"
        actionHref="/dashboard/posts"
      />
      <CreatePostForm />
    </div>
  );
}
