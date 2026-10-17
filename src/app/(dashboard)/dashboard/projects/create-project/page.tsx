import PageHeader from "@/app/(dashboard)/components/PageHeader";
import ProjectForm from "../components/ProjectForm";

const card =
  "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900";

const page = () => {
  return (
    <div>
      <PageHeader
        title="Create New Project"
        description="Fill in the details to publish a new project project."
        actionLabel="← Back to Project"
        actionHref="/dashboard/projects"
      />
      <section className={`${card} mt-10 max-w-3xl`}>
        <ProjectForm />
      </section>
    </div>
  );
};

export default page;
