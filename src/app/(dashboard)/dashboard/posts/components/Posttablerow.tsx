import { formatDate } from "@/utils/DateFormate";
import RowActions from "./Rowactions";
import { TPost } from "@/types/post";

export default function PostTableRow({ post }: { post: TPost }) {
  const hasVideo = post.videoUrl !== "";

  return (
    <tr className="border-b border-gray-100 last:border-0 dark:border-gray-800">
      <td className="max-w-xs px-3 py-3.5">
        <p className="truncate font-semibold">{post.title}</p>
        <p className="mt-0.5 flex gap-2 text-xs text-gray-500">
          <span>🖼️ {post.imageUrl.length}</span>
          {hasVideo && <span>🎬 Video</span>}
        </p>
      </td>
      <td className="px-3 py-3.5">{post.projectLocation}</td>
      <td className="max-w-[200px] truncate px-3 py-3.5">{post.benificiary}</td>
      <td className="px-3 py-3.5">{post.duration}</td>
      <td className="max-w-[220px] truncate px-3 py-3.5 text-gray-500">
        {post.expense_details}
      </td>
      <td className="whitespace-nowrap px-3 py-3.5 text-gray-500">
        {formatDate(post.createdAt)}
      </td>
      <td className="px-3 py-3.5">
        <RowActions postId={post._id} />
      </td>
    </tr>
  );
}
