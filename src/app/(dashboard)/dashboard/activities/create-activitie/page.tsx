
import PageHeader from "../components/PageHeader";
import CreateActiviteForm from "./components/CreateActivitesForm";
export default function CreateActivitiePage() {
  return (
    <div className="mx-auto space-y-5">
      <PageHeader
        title="Create New Post"
        description="Fill in the details to publish a new project post."
        actionLabel="← Back to Posts"
        actionHref="/dashboard/posts"
      />
      <CreateActiviteForm />
    </div>
  );
}
