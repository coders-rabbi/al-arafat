"use client";

import { Check, Copy, Eye, Play, Trash2 } from "lucide-react";
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

const MediaCard = ({
  item,
  selected,
  onSelect,
  onPreview,
  onCopy,
  onDelete,
}: Props) => {
  const isVideo = item.type === "video";

  return (
    <div
      className={`group overflow-hidden rounded-lg border bg-white transition-shadow hover:shadow-md ${
        selected
          ? "border-[#008e48] ring-2 ring-[#008e48]/30"
          : "border-gray-200"
      }`}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
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
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}

        {/* Video badges */}
        {isVideo && (
          <>
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-black/60 p-2.5 text-white">
                <Play className="h-5 w-5 fill-white" />
              </span>
            </span>
          </>
        )}

        {/* Hover overlay + actions */}
        <div
          onClick={onPreview}
          className="absolute inset-0 flex cursor-pointer items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {[
            { icon: Eye, label: "Preview", fn: onPreview },
            { icon: Copy, label: "Copy URL", fn: onCopy },
            { icon: Trash2, label: "Delete", fn: onDelete },
          ].map(({ icon: Icon, label, fn }) => (
            <button
              key={label}
              aria-label={label}
              title={label}
              onClick={(e) => {
                e.stopPropagation();
                fn();
              }}
              className="rounded-full bg-white p-2 text-gray-800 hover:bg-gray-200"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        {/* Checkbox */}
        <button
          type="button"
          onClick={onSelect}
          aria-label="Select"
          className={`absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded border transition-opacity ${
            selected
              ? "border-[#008e48] bg-[#008e48] opacity-100"
              : "border-white bg-black/30 opacity-0 group-hover:opacity-100"
          }`}
        >
          {selected && <Check className="h-3.5 w-3.5 text-white" />}
        </button>
      </div>

      <div className="p-2">
        <p
          className="truncate text-sm font-medium text-gray-800"
          title={item.title}
        >
          {item.title}
        </p>
        <p className="text-xs text-gray-500">{formatDate(item.createdAt)}</p>
      </div>
    </div>
  );
};

export default MediaCard;
