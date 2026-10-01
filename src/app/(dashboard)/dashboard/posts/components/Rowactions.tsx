import Link from "next/link";

const base = "rounded-lg px-2.5 py-1.5 text-xs font-semibold transition";

export default function RowActions({ postId }: { postId: string }) {
  return (
    <div className="flex items-center justify-end gap-1.5">
      <Link
        href={`/dashboard/projects/${postId}`}
        className={`${base} text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
      >
        View
      </Link>
      <Link
        href={`/dashboard/projects/${postId}/edit`}
        className={`${base} text-emerald-700 hover:bg-emerald-50 dark:text-emerald-400 dark:hover:bg-emerald-950`}
      >
        Edit
      </Link>
      {/* Delete handler pore lagbe, tokhon eta Client Component banate hobe */}
      <button
        type="button"
        className={`${base} text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950`}
      >
        Delete
      </button>
    </div>
  );
}
