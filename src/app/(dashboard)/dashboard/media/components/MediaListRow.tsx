"use client";

import { Copy, Eye, Film, ImageIcon, Trash2 } from "lucide-react";
import { TMedia } from "@/types/media";
import { formatDate } from "@/lib/media-utils";

type Props = {
  item: TMedia;
  selected: boolean;
  onSelect: () => void;
  onPreview: () => void;
  onCopy: () => void;
  onDelete: () => void;
};

const MediaListRow = ({
  item,
  selected,
  onSelect,
  onPreview,
  onCopy,
  onDelete,
}: Props) => {
  const isVideo = item.type === "video";

  return (
    <tr
      className={`border-b border-gray-100 ${selected ? "bg-green-50" : "hover:bg-gray-50"}`}
    >
      <td className="p-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={onSelect}
          className="h-4 w-4 accent-[#008e48]"
        />
      </td>
      <td className="p-3">
        <button
          onClick={onPreview}
          className="flex items-center gap-3 text-left"
        >
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded bg-gray-100">
            {isVideo && !item.thumbnail ? (
              <video
                src={`${item.url}#t=0.5`}
                preload="metadata"
                muted
                className="h-full w-full object-cover"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={isVideo ? item.thumbnail : item.url}
                alt={item.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <span className="max-w-[220px] truncate font-medium text-gray-800">
            {item.title}
          </span>
        </button>
      </td>
      <td className="p-3">
        <span className="inline-flex items-center gap-1 text-gray-600">
          {isVideo ? (
            <Film className="h-4 w-4" />
          ) : (
            <ImageIcon className="h-4 w-4" />
          )}
          {isVideo ? "Video" : "Image"}
        </span>
      </td>
      <td className="p-3 text-gray-600">{formatDate(item.createdAt)}</td>
      <td className="p-3">
        <div className="flex justify-end gap-1">
          <button
            onClick={onPreview}
            aria-label="Preview"
            className="rounded p-1.5 text-gray-600 hover:bg-gray-200"
          >
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={onCopy}
            aria-label="Copy URL"
            className="rounded p-1.5 text-gray-600 hover:bg-gray-200"
          >
            <Copy className="h-4 w-4" />
          </button>
          <button
            onClick={onDelete}
            aria-label="Delete"
            className="rounded p-1.5 text-red-500 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MediaListRow;
