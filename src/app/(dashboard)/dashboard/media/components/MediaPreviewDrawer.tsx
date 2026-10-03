"use client";

import { useEffect } from "react";
import { Copy, Download, Trash2, X } from "lucide-react";
import { TMedia } from "@/types/media";
import { formatDate } from "@/lib/media-utils";
import { getYouTubeEmbedUrl, getYouTubeId } from "@/lib/youtube";

type Props = {
  item: TMedia | null;
  onClose: () => void;
  onCopy: (url: string) => void;
  onDelete: (id: string) => void;
};

const MediaPreviewDrawer = ({ item, onClose, onCopy, onDelete }: Props) => {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);

  if (!item) return null;

  const isVideo = item.type === "video";
  const ytId = isVideo ? getYouTubeId(item.url) : null;

  const details = [
    { label: "Type", value: isVideo ? "Video" : "Image" },
    { label: "Uploaded", value: formatDate(item.createdAt) },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <aside className="relative flex h-full w-full flex-col bg-white shadow-xl sm:max-w-md">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="font-semibold text-gray-900">Details</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          <div className="overflow-hidden rounded-lg bg-black">
            {isVideo ? (
              ytId ? (
                <iframe
                  key={item._id}
                  src={getYouTubeEmbedUrl(ytId)}
                  title={item.title}
                  allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              ) : (
                <p className="p-4 text-sm text-white">Video load kora jayni</p>
              )
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.url}
                alt={item.title}
                className="max-h-[320px] w-full object-contain"
              />
            )}
          </div>

          <div>
            <p className="break-all font-medium text-gray-900">{item.title}</p>
          </div>

          <dl className="space-y-2 text-sm">
            {details.map((d) => (
              <div key={d.label} className="flex justify-between">
                <dt className="text-gray-500">{d.label}</dt>
                <dd className="text-gray-800">{d.value}</dd>
              </div>
            ))}
          </dl>

          <div>
            <p className="mb-1 text-sm text-gray-500">URL</p>
            <input
              readOnly
              value={item.url}
              onFocus={(e) => e.target.select()}
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-xs text-gray-700"
            />
          </div>
        </div>

        <div
          className={`grid gap-2 border-t border-gray-200 p-4 ${
            isVideo ? "grid-cols-2" : "grid-cols-3"
          }`}
        >
          <button
            onClick={() => onCopy(item.url)}
            className="flex items-center justify-center gap-1 rounded-md border border-gray-300 py-2 text-sm hover:bg-gray-100"
          >
            <Copy className="h-4 w-4" /> Copy
          </button>
          {!isVideo && (
            <a
              href={item.url}
              download
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1 rounded-md border border-gray-300 py-2 text-sm hover:bg-gray-100"
            >
              <Download className="h-4 w-4" /> Save
            </a>
          )}
          <button
            onClick={() => onDelete(item._id)}
            className="flex items-center justify-center gap-1 rounded-md bg-red-500 py-2 text-sm text-white hover:bg-red-600"
          >
            <Trash2 className="h-4 w-4" /> Delete
          </button>
        </div>
      </aside>
    </div>
  );
};

export default MediaPreviewDrawer;
