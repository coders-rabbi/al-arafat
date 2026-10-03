"use client";

import { useMemo, useState } from "react";
import { Trash2, Upload, X } from "lucide-react";
import MediaToolbar, { MediaSort, MediaTab, MediaView } from "./MediaToolBar";
import MediaEmptyState from "./MediaEmptyState";
import MediaCard from "./MediaCard";
import MediaListRow from "./MediaListRow";
import MediaPreviewDrawer from "./MediaPreviewDrawer";
import UploadModal from "./UploadModal";
import { TMedia } from "@/types/media";
import { getAllMedia } from "@/service/media";
import { bulkDeleteMedia, deleteMedia } from "@/service/media";

const MediaLibrary = ({ initialMedia }: { initialMedia: TMedia[] }) => {
  const [items, setItems] = useState<TMedia[]>(initialMedia);
  const [tab, setTab] = useState<MediaTab>("all");
  const [sort, setSort] = useState<MediaSort>("newest");
  const [view, setView] = useState<MediaView>("grid");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [preview, setPreview] = useState<TMedia | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [toast, setToast] = useState("");

  const counts = useMemo(
    () => ({
      all: items.length,
      image: items.filter((i) => i.type === "image").length,
      video: items.filter((i) => i.type === "video").length,
    }),
    [items],
  );

  const filtered = useMemo(() => {
    const list = items
      .filter((i) => tab === "all" || i.type === tab)
      .filter((i) => i.title.toLowerCase().includes(search.toLowerCase()));

    return list.sort((a, b) => {
      if (sort === "name") return a.title.localeCompare(b.title);
      const diff =
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      return sort === "newest" ? -diff : diff;
    });
  }, [items, tab, search, sort]);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2000);
  };

  const toggleSelect = (id: string) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const copyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    showToast("URL copy hoyeche");
  };

  const deleteItems = async (ids: string[]) => {
    if (!confirm(`${ids.length} ti file delete korben?`)) return;

    try {
      // ekta hole single delete, ekadhik hole bulk delete
      const res =
        ids.length === 1
          ? await deleteMedia(ids[0])
          : await bulkDeleteMedia(ids);

      if (!res.success) {
        showToast(res.message || "Delete hoyni");
        return;
      }

      // server e delete hoye gele tarpor screen theke soraw
      setItems((prev) => prev.filter((i) => !ids.includes(i._id)));
      setSelected((prev) => prev.filter((id) => !ids.includes(id)));
      setPreview((p) => (p && ids.includes(p._id) ? null : p));
      showToast("Delete hoyeche");
    } catch (error) {
      showToast(error instanceof Error ? error.message : "Delete hoyni");
    }
  };

  const handleUploaded = (newItems: TMedia[]) =>
    setItems((prev) => [...newItems, ...prev]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Media Library
          </h1>
          <p className="text-sm text-gray-500">{items.length} files</p>
        </div>
        <button
          onClick={() => setUploadOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-[#008e48] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#007a3e]"
        >
          <Upload className="h-4 w-4" />
          Upload Media
        </button>
      </div>

      <MediaToolbar
        tab={tab}
        onTabChange={setTab}
        counts={counts}
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
        view={view}
        onViewChange={setView}
      />

      {/* Bulk action bar */}
      {selected.length > 0 && (
        <div className="flex items-center justify-between rounded-lg bg-gray-900 px-4 py-2 text-sm text-white">
          <span>{selected.length} selected</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => deleteItems(selected)}
              className="flex items-center gap-1 rounded-md bg-red-500 px-3 py-1 hover:bg-red-600"
            >
              <Trash2 className="h-4 w-4" /> Delete
            </button>
            <button
              onClick={() => setSelected([])}
              className="flex items-center gap-1 rounded-md bg-white/10 px-3 py-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" /> Cancel
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      {filtered.length === 0 ? (
        <MediaEmptyState
          hasMedia={items.length > 0}
          onUpload={() => setUploadOpen(true)}
        />
      ) : view === "grid" ? (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
          {filtered.map((item) => (
            <MediaCard
              key={item._id}
              item={item}
              selected={selected.includes(item._id)}
              onSelect={() => toggleSelect(item._id)}
              onPreview={() => setPreview(item)}
              onCopy={() => copyUrl(item.url)}
              onDelete={() => deleteItems([item._id])}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-gray-600">
              <tr>
                <th className="w-10 p-3" />
                <th className="p-3">File</th>
                <th className="p-3">Type</th>
                <th className="p-3">Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <MediaListRow
                  key={item._id}
                  item={item}
                  selected={selected.includes(item._id)}
                  onSelect={() => toggleSelect(item._id)}
                  onPreview={() => setPreview(item)}
                  onCopy={() => copyUrl(item.url)}
                  onDelete={() => deleteItems([item._id])}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <MediaPreviewDrawer
        item={preview}
        onClose={() => setPreview(null)}
        onCopy={copyUrl}
        onDelete={(id) => deleteItems([id])}
      />

      <UploadModal
        open={uploadOpen}
        onClose={() => setUploadOpen(false)}
        onUploaded={handleUploaded}
      />
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg">
          {toast}
        </div>
      )}
    </div>
  );
};

export default MediaLibrary;
