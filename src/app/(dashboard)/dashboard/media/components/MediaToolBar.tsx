"use client";

import { LayoutGrid, List, Search } from "lucide-react";

export type MediaTab = "all" | "image" | "video";
export type MediaSort = "newest" | "oldest" | "name";
export type MediaView = "grid" | "list";

type Props = {
  tab: MediaTab;
  onTabChange: (t: MediaTab) => void;
  counts: Record<MediaTab, number>;
  search: string;
  onSearchChange: (v: string) => void;
  sort: MediaSort;
  onSortChange: (s: MediaSort) => void;
  view: MediaView;
  onViewChange: (v: MediaView) => void;
};

const tabs: { key: MediaTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "image", label: "Images" },
  { key: "video", label: "Videos" },
];

const MediaToolbar = ({
  tab,
  onTabChange,
  counts,
  search,
  onSearchChange,
  sort,
  onSortChange,
  view,
  onViewChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-3 lg:flex-row lg:items-center lg:justify-between">
      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onTabChange(t.key)}
            className={`whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              tab === t.key
                ? "bg-[#008e48] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {t.label}
            <span
              className={`ml-1.5 text-xs ${
                tab === t.key ? "text-white/80" : "text-gray-400"
              }`}
            >
              {counts[t.key]}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Search */}
        <div className="relative flex-1 lg:w-64 lg:flex-none">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search files..."
            className="w-full rounded-md border border-gray-300 py-1.5 pl-9 pr-3 text-sm outline-none focus:border-[#008e48]"
          />
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as MediaSort)}
          className="rounded-md border border-gray-300 px-2 py-1.5 text-sm outline-none focus:border-[#008e48]"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="name">Name</option>
        </select>

        {/* View toggle */}
        <div className="flex overflow-hidden rounded-md border border-gray-300">
          {(["grid", "list"] as MediaView[]).map((v) => (
            <button
              key={v}
              onClick={() => onViewChange(v)}
              aria-label={`${v} view`}
              className={`p-2 ${
                view === v
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {v === "grid" ? (
                <LayoutGrid className="h-4 w-4" />
              ) : (
                <List className="h-4 w-4" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaToolbar;
