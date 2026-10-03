"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, X } from "lucide-react";
import { TMedia, TMediaType } from "@/types/media";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";

const BN_MONTHS = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const TABS: { value: TMediaType; label: string }[] = [
  { value: "image", label: "ছবি" },
  { value: "video", label: "ভিডিও" },
];

// createdAt (UTC) ke Bangladesh time (UTC+6) e "YYYY-MM" banai
const monthKey = (iso: string) =>
  new Date(new Date(iso).getTime() + 6 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 7);

const monthLabel = (key: string) => {
  const [y, m] = key.split("-");
  return `${BN_MONTHS[Number(m) - 1]} ${Number(y).toLocaleString("bn-BD", { useGrouping: false })}`;
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  });

export default function GalleryTabs({ items }: { items: TMedia[] }) {
  const [tab, setTab] = useState<TMediaType>("image");
  const [month, setMonth] = useState("all");
  const [selected, setSelected] = useState<TMedia | null>(null);

  const tabItems = useMemo(
    () =>
      items
        .filter((i) => i.type === tab)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
    [items, tab],
  );

  const months = useMemo(
    () => Array.from(new Set(tabItems.map((i) => monthKey(i.createdAt)))),
    [tabItems],
  );

  const visible =
    month === "all"
      ? tabItems
      : tabItems.filter((i) => monthKey(i.createdAt) === month);

  // Esc chaple lightbox bondho
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  const selectedYtId =
    selected?.type === "video" ? getYouTubeId(selected.url) : null;

  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 py-8 md:py-12">
      {/* ট্যাব + ফিল্টার */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-fit rounded-full bg-gray-100 p-1">
          {TABS.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => {
                setTab(t.value);
                setMonth("all");
              }}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                tab === t.value
                  ? "bg-[#008e48] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          aria-label="মাস অনুযায়ী"
          className="min-w-[200px] rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#008e48]"
        >
          <option value="all">সব সময়</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {monthLabel(m)}
            </option>
          ))}
        </select>
      </div>

      {/* গ্রিড */}
      {visible.length === 0 ? (
        <p className="py-16 text-center text-gray-500">
          এই সময়ে কোনো {tab === "image" ? "ছবি" : "ভিডিও"} পাওয়া যায়নি।
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visible.map((item) => {
            const ytId = item.type === "video" ? getYouTubeId(item.url) : null;
            const thumb =
              item.type === "image"
                ? item.url
                : item.thumbnail || (ytId ? getYouTubeThumbnail(ytId) : "");

            return (
              <div
                key={item._id}
                onClick={() => setSelected(item)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={thumb}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {item.type === "video" && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/65 text-white">
                      <Play className="h-7 w-7 fill-white" />
                    </span>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs">{formatDate(item.createdAt)}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setSelected(null)}
          />

          <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-lg bg-black">
            {selected.type === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={selected.url}
                alt={selected.title}
                className="h-full w-full object-contain"
              />
            ) : selectedYtId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedYtId}?autoplay=1`}
                title={selected.title}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="h-full w-full border-0"
              />
            ) : (
              <p className="p-6 text-sm text-white">ভিডিও লোড করা যায়নি।</p>
            )}

            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
