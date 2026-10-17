import { TProject } from "@/types/project";


type Props = {
  projects: TProject[];
};

const ProjectTable = ({ projects }: Props) => {
  if (!projects.length) {
    return (
      <p className="py-10 text-center text-sm text-gray-500">
        No projects found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="text-xs text-gray-500">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            <th className="px-2 py-2 font-semibold">Project</th>
            <th className="px-2 py-2 font-semibold">Location</th>
            <th className="px-2 py-2 font-semibold">Beneficiaries</th>
            <th className="px-2 py-2 font-semibold">Expense</th>
            <th className="px-2 py-2 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p: any) => (
            <tr
              key={p._id}
              className="border-b border-gray-100 last:border-0 dark:border-gray-800"
            >
              <td className="px-2 py-3">
                <p className="font-semibold">{p.title}</p>
                <p className="text-xs text-gray-500">{p.duration}</p>
              </td>
              <td className="px-2 py-3">{p.location}</td>
              <td className="px-2 py-3">{p.beneficiary}</td>
              <td className="px-2 py-3">{p.expense}</td>
              <td className="px-2 py-3">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    p.status === "Completed"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                      : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                  }`}
                >
                  {p.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
