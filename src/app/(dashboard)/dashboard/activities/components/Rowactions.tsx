"use client";

import Link from "next/link";
import { FaPencil, FaTrash } from "react-icons/fa6";

const base =
  "inline-flex items-center justify-center rounded-lg px-2.5 py-1.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-50";

type RowActionsProps = {
  activitieId: string;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
};

export default function RowActions({
  activitieId,
  onDelete,
  isDeleting = false,
}: RowActionsProps) {
  return (
    <div className="flex items-center justify-end gap-1.5">
      <Link
        href={`/dashboard/blogs/edit/${activitieId}`}
        aria-label="Edit blog"
        className={`${base} border border-gray-300 bg-white text-gray-700 hover:bg-gray-100`}
      >
        <FaPencil className="h-4 w-4" />
      </Link>

      <button
        type="button"
        aria-label="Delete blog"
        disabled={isDeleting}
        onClick={() => onDelete(activitieId)}
        className={`${base} bg-red-600 text-white hover:bg-red-700`}
      >
        <FaTrash className="h-4 w-4" />
      </button>
    </div>
  );
}
