// @/types/media.ts er sheshe eta add koro (MediaItem ager moto thakbe)

export type TMediaType = "image" | "video";

// Backend theke ja ashe
export type TMedia = {
  _id: string;
  title: string;
  type: TMediaType;
  url: string;
  publicId?: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
};

// Backend e ja pathate hobe
export type TMediaPayload =
  | { title: string; type: "image"; url: string; publicId: string }
  | { title: string; type: "video"; url: string };
