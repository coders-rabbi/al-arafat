export type GalleryItem = {
  id: number;
  type: "photo" | "video";
  title: string;
  date: string; // YYYY-MM-DD
  src?: string; // ছবির পাথ (public ফোল্ডার থেকে)
  youtubeId?: string; // ভিডিওর YouTube ID
};

export const galleryItems: GalleryItem[] = [
  { id: 1, type: "photo", title: "ত্রাণ বিতরণ", date: "2026-09-15", src: "/gallery/1.jpg" },
  { id: 2, type: "photo", title: "স্বাস্থ্য ক্যাম্প", date: "2026-09-03", src: "/gallery/2.jpg" },
  { id: 3, type: "photo", title: "শীতবস্ত্র বিতরণ", date: "2026-08-20", src: "/gallery/3.jpg" },
  { id: 4, type: "video", title: "আমাদের কার্যক্রম", date: "2026-09-10", youtubeId: "dQw4w9WgXcQ" },
  { id: 5, type: "video", title: "বার্ষিক অনুষ্ঠান", date: "2026-08-05", youtubeId: "dQw4w9WgXcQ" },
];