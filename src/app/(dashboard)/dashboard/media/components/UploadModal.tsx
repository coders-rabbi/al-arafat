"use client";

import { useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { ImageIcon, Video, X } from "lucide-react";
import ImageUploader, {
  TImageValue,
} from "@/app/(dashboard)/dashboard/activities/create-activitie/components/ImageUploader";
import { getYouTubeId, getYouTubeThumbnail } from "@/lib/youtube";
import { createMedia } from "@/service/media";
import { toast } from "sonner";
import { TMedia, TMediaPayload } from "@/types/media";

type Props = {
  open: boolean;
  onClose: () => void;
  onUploaded?: (items: TMedia[]) => void;
};

type FormValues = {
  kind: "image" | "video";
  title: string;
  image: TImageValue;
  youtubeUrl: string;
};

const emptyImage: TImageValue = { url: "", publicId: "" };

const defaultValues: FormValues = {
  kind: "image",
  title: "",
  image: emptyImage,
  youtubeUrl: "",
};

const UploadModal = ({ open, onClose, onUploaded }: Props) => {
  const [isUploading, setIsUploading] = useState(false);

  const { register, control, handleSubmit, reset, setValue } =
    useForm<FormValues>({ defaultValues });

  const kind = useWatch({ control, name: "kind" });
  const title = useWatch({ control, name: "title" });
  const image = useWatch({ control, name: "image" });
  const youtubeUrl = useWatch({ control, name: "youtubeUrl" });
  const youtubeId = getYouTubeId(youtubeUrl);

  if (!open) return null;

  const canSubmit =
    !isUploading &&
    title.trim().length > 0 &&
    (kind === "image" ? !!image.url : !!youtubeId);

  // modal bondho hole form reset (useEffect er bodole ekhanei reset kora hocche)
  const handleClose = () => {
    if (isUploading) return;
    reset(defaultValues);
    onClose();
  };

  const onSubmit = async (values: FormValues) => {
    const payload: TMediaPayload =
      values.kind === "image"
        ? {
            title: values.title.trim(),
            type: "image",
            url: values.image.url,
            publicId: values.image.publicId,
          }
        : {
            title: values.title.trim(),
            type: "video",
            url: values.youtubeUrl.trim(),
          };

    try {
      const res = await createMedia(payload);

      if (res.success) {
        toast.success("Media add successfull");
        if (res.data) onUploaded?.([res.data]);
        reset(defaultValues);
        onClose();
      } else {
        toast.error(res.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-xl bg-white shadow-xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <h2 className="font-semibold text-gray-900">Upload Media</h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="rounded p-1 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {/* Type switch */}
          <div className="grid grid-cols-2 gap-2">
            {(
              [
                { key: "image", label: "Image", icon: ImageIcon },
                { key: "video", label: "Video (YouTube)", icon: Video },
              ] as const
            ).map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                disabled={isUploading}
                onClick={() => setValue("kind", key)}
                className={`flex items-center justify-center gap-2 rounded-md border py-2 text-sm font-medium transition-colors disabled:opacity-50 ${
                  kind === key
                    ? "border-[#008e48] bg-[#008e48] text-white"
                    : "border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-4 w-4" /> {label}
              </button>
            ))}
          </div>

          {/* Title */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              {...register("title")}
              placeholder="Media er title likho..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#008e48]"
            />
          </div>

          {/* IMAGE: tomar existing ImageUploader (backend -> Cloudinary) */}
          {kind === "image" && (
            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageUploader
                  value={field.value}
                  onChange={field.onChange}
                  onRemove={() => field.onChange(emptyImage)}
                  canRemove={!!field.value.url}
                  onUploadingChange={setIsUploading}
                />
              )}
            />
          )}

          {/* VIDEO: YouTube link */}
          {kind === "video" && (
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                YouTube Link <span className="text-red-500">*</span>
              </label>
              <input
                {...register("youtubeUrl")}
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#008e48]"
              />
              {youtubeUrl && !youtubeId && (
                <p className="mt-1 text-xs text-red-500">
                  Valid YouTube link dao
                </p>
              )}
              {youtubeId && (
                <div className="mt-3 overflow-hidden rounded-lg bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getYouTubeThumbnail(youtubeId)}
                    alt="YouTube thumbnail"
                    className="aspect-video w-full object-cover"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 border-t border-gray-200 p-4">
          <button
            type="button"
            onClick={handleClose}
            disabled={isUploading}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!canSubmit}
            className="rounded-md bg-[#008e48] px-4 py-2 text-sm font-medium text-white hover:bg-[#007a3e] disabled:opacity-50"
          >
            {isUploading ? "Uploading image..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadModal;
