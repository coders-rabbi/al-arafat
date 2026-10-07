import { getAllActivitie } from "@/service/Activities";
import PageHeader from "./components/PageHeader";
import ActivitieTable from "./components/ActivitieTable";

export default async function ProjectsPage() {
    const res = await getAllActivitie();
    const activitie = res.data;

  return (
    <div className="space-y-5">
      <PageHeader
        title="Projects"
        description="Manage all your project posts."
        actionLabel="+ New Post"
        actionHref="/dashboard/activities/create-activitie"
      />

      <section className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h2 className="font-semibold">Previous Posts</h2>
        <p className="mb-4 text-xs text-gray-500">
          Showing {activitie?.length} recent posts
        </p>
        <ActivitieTable activities={activitie} />
      </section>
    </div>
  );
}
