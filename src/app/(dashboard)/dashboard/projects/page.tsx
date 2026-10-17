import React from "react";
import PageHeader from "../../components/PageHeader";
import { getAllProjects } from "@/service/project/inde";
import { TProject } from "@/types/project";
import ProjectTable from "./components/ProjectTable";
export const dynamic = "force-dynamic";

const card =
  "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900";

const page = async () => {
  let projects: TProject[] = [];

  try {
    const res = await getAllProjects();
    projects = res?.data ?? [];
  } catch (error) {
    console.error("getAllProjects failed:", error);
  }

  return (
    <div>
      <PageHeader
        title="Projects"
        description="Manage all your projects."
        actionLabel="+ Add Project"
        actionHref="/dashboard/projects/create-project"
      />

      <section className={`${card} mt-10`}>
        <h2 className="font-semibold">Recent Projects</h2>
        <p className="mb-4 text-xs text-gray-500">
          Latest posts added by your team
        </p>

        <ProjectTable projects={projects} />
      </section>
    </div>
  );
};

export default page;
