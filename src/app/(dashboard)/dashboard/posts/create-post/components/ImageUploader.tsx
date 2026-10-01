"use client";

import { uploadFile } from "@/service/uploads";
import { useEffect, useRef, useState } from "react";
export type TImageValue = {
  url: string;
  publicId: string;
};

type ImageUploaderProps = {
  value: TImageValue;
  onChange: (value: TImageValue) => void;
  onRemove: () => void;
  canRemove: boolean;
  onUploadingChange?: (uploading: boolean) => void;
};

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

export default function ImageUploader({
  value,
  onChange,
  onRemove,
  canRemove,
  onUploadingChange,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  // blob URL memory leak thekate
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const clearInput = () => {
    if (inputRef.current) inputRef.current.value = "";
  };

  const openFilePicker = () => inputRef.current?.click();

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setUploadError("Only image files are allowed");
      clearInput();
      return;
    }

    if (file.size > MAX_SIZE) {
      setUploadError("File size must be less than 10 MB");
      clearInput();
      return;
    }

    // preview sathe sathe dekhai
    setPreviewUrl(URL.createObjectURL(file));

    try {
      setIsUploading(true);
      onUploadingChange?.(true);
      setUploadError(null);

      const res = await uploadFile(file);
      onChange({ url: res.data.url, publicId: res.data.publicId });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
      setPreviewUrl(null);
      onChange({ url: "", publicId: "" });
    } finally {
      setIsUploading(false);
      onUploadingChange?.(false);
      clearInput(); // same file abar select korle onChange jate cholte pare
    }
  };

  const src = previewUrl ?? (value.url || null);

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        {/* Click korle file picker khole, hover korle "Change image" dekhay */}
        <button
          type="button"
          onClick={openFilePicker}
          disabled={isUploading}
          aria-label={src ? "Change image" : "Upload image"}
          className="group relative grid h-28 w-44 shrink-0 cursor-pointer place-items-center overflow-hidden rounded-xl border border-dashed border-gray-300 bg-gray-50 text-gray-400 transition hover:border-emerald-500 disabled:cursor-not-allowed dark:border-gray-700 dark:bg-gray-800"
        >
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex flex-col items-center gap-1 text-xs">
              <span className="text-2xl">📷</span>
              Click to upload
            </span>
          )}

          {/* Hover overlay (shudhu image thakle) */}
          {src && !isUploading && (
            <span className="absolute inset-0 grid place-items-center bg-black/50 text-sm font-medium text-white opacity-0 transition group-hover:opacity-100">
              Change image
            </span>
          )}

          {isUploading && (
            <span className="absolute inset-0 grid place-items-center bg-black/50 text-sm font-medium text-white">
              Uploading...
            </span>
          )}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={onRemove}
          disabled={!canRemove || isUploading}
          className="rounded-xl px-3 py-1.5 text-sm text-rose-600 hover:bg-rose-50 disabled:opacity-40 dark:hover:bg-rose-950"
        >
          Remove
        </button>
      </div>

      {uploadError && (
        <p className="mt-1 text-xs text-rose-600">{uploadError}</p>
      )}
    </div>
  );
}
