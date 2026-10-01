import { TPost } from "@/types/post";
import TableEmptyState from "./Tableemptystate";
import PostTableRow from "./PostTableRow";


const columns = [
  "Project",
  "Location",
  "Beneficiary",
  "Duration",
  "Expense",
  "Created",
  "",
];

export default function PostsTable({ posts }: { posts: TPost[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="text-xs text-gray-500">
          <tr className="border-b border-gray-200 dark:border-gray-800">
            {columns.map((col, i) => (
              <th key={i} className="px-3 py-2 font-semibold">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? (
            <TableEmptyState message="No posts yet. Create your first post." />
          ) : (
            posts.map((post) => <PostTableRow key={post._id} post={post} />)
          )}
        </tbody>
      </table>
    </div>
  );
}