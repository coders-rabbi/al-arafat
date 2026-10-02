"use client";

import { createPost } from "@/service/post";
import { TPostPayload } from "@/types/post";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import FormInput from "./FormInput";
import ImageUploader, { TImageValue } from "./ImageUploader";
import RichTextEditor from "@/app/(dashboard)/components/RechTextEditor";
import { toast } from "sonner";

// Form-er type: imageUrl string[] er bodole { url, publicId } array (useFieldArray-er jonno)
type CreatePostFormValues = Omit<TPostPayload, "imageUrl" | "videoUrl"> & {
  images: TImageValue[];
  videoUrl: string;
};

const sectionClass =
  "rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900";

const emptyImage: TImageValue = { url: "", publicId: "" };

export default function CreatePostForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  const [uploadingIds, setUploadingIds] = useState<string[]>([]);

  const isUploading = uploadingIds.length > 0;

  const handleUploadingChange = (id: string, uploading: boolean) => {
    setUploadingIds((prev) =>
      uploading ? [...prev, id] : prev.filter((item) => item !== id),
    );
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<CreatePostFormValues>({
    defaultValues: {
      title: "",
      content: "",
      images: [emptyImage],
      videoUrl: "",
      projectAim: "",
      benificiary: "",
      expense_details: "",
      projectLocation: "",
      duration: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "images",
  });

  const onSubmit = async (values: CreatePostFormValues) => {
    setServerError(null);

    const { images, ...rest } = values;
    const payload: TPostPayload = {
      ...rest,
      // shudhu upload hoye jawa image-er url pathai
      imageUrl: images.map((image) => image.url).filter(Boolean),
    };

    try {
      const res = await createPost(payload);
      if (res?.success) {
        toast.success("Post has been created");
      }

      router.push("/dashboard/posts");
      router.refresh();
    } catch (error) {
      // Backend-er Zod validation error ekhane message hishebe ashbe
      setServerError(
        error instanceof Error ? error.message : "Something went wrong",
      );
      toast.error(serverError);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Basic info */}
      <section className={`${sectionClass} space-y-4`}>
        <h2 className="font-semibold">Basic Information</h2>
        <FormInput
          label="Title"
          placeholder="e.g. Pani Shuddhokoron Plant Sthapon"
          {...register("title")}
        />
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <RichTextEditor
              label="Content"
              placeholder="Write the full details of the project..."
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </section>

      {/* Project details */}
      <section className={`${sectionClass} space-y-4`}>
        <h2 className="font-semibold">Project Details</h2>
        <Controller
          name="projectAim"
          control={control}
          render={({ field }) => (
            <RichTextEditor
              label="Project Aim"
              placeholder="What is the aim of this project?"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="benificiary"
          control={control}
          render={({ field }) => (
            <RichTextEditor
              label="Beneficiary"
              placeholder="e.g. 300 families"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <FormInput
            label="Project Location"
            placeholder="e.g. Shahpur, Sirajganj"
            {...register("projectLocation")}
          />
          <FormInput
            label="Duration"
            placeholder="e.g. 6 mash"
            {...register("duration")}
          />
        </div>
        <Controller
          name="expense_details"
          control={control}
          render={({ field }) => (
            <RichTextEditor
              label="Expense Details"
              placeholder="e.g. Plant: 3,00,000 Taka, Pipeline: 1,50,000 Taka"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </section>

      {/* Media */}
      <section className={`${sectionClass} space-y-4`}>
        <h2 className="font-semibold">Media</h2>

        <div>
          <p className="mb-1.5 text-sm font-medium">Images</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {fields.map((item, index) => (
              <Controller
                key={item.id}
                name={`images.${index}` as const}
                control={control}
                render={({ field }) => (
                  <ImageUploader
                    value={field.value}
                    onChange={field.onChange}
                    onRemove={() => remove(index)}
                    canRemove={fields.length > 1}
                    onUploadingChange={(uploading) =>
                      handleUploadingChange(item.id, uploading)
                    }
                  />
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => append(emptyImage)}
            disabled={fields.length >= 10 || isUploading}
            className="mt-3 text-sm font-semibold text-emerald-700 hover:underline disabled:opacity-40 dark:text-emerald-400"
          >
            + Add another image
          </button>
        </div>

        <FormInput
          label="Video URL (optional)"
          placeholder="https://..."
          {...register("videoUrl")}
        />
      </section>

      {serverError && (
        <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950 dark:text-rose-300">
          {serverError}
        </p>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Link
          href="/dashboard/posts"
          className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Cancel
        </Link>
        <button
          type="submit"
          disabled={isSubmitting || isUploading}
          className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
        >
          {isUploading
            ? "Uploading image..."
            : isSubmitting
              ? "Creating..."
              : "Create Post"}
        </button>
      </div>
    </form>
  );
}
