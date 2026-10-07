import { TActivitie } from "@/types/Activities";
import TableEmptyState from "./Tableemptystate";
import Activitietablerow from "./Activitietablerow";

const columns = [
  { label: "Project", className: "w-[40%]" },
  { label: "Location", className: "w-[20%]" },
  { label: "Duration", className: "w-[12%]" },
  { label: "Created", className: "w-[14%]" },
  { label: "Action", className: "w-[14%] text-right" },
];

export default function ActivitieTable({ activities }: { activities: TActivitie[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] table-fixed text-left text-sm">
        <thead className="text-xs text-gray-500">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            {columns.map((col) => (
              <th
                key={col.label}
                className={`px-3 py-2 font-semibold ${col.className}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {activities.length === 0 ? (
            <TableEmptyState message="No posts yet. Create your first post." />
          ) : (
            activities.map((activitie) => <Activitietablerow key={activitie._id} activitie={activitie} />)
          )}
        </tbody>
      </table>
    </div>
  );
}
