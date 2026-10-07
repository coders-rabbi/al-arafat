"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { formatDate } from "@/utils/DateFormate";
import RowActions from "./Rowactions";
import { TActivitie } from "@/types/Activities";
import { deleteActivitie } from "@/service/Activities"; // tomar post delete service-er path/name onujayi change koro

export default function Activitietablerow({ activitie }: { activitie: TActivitie }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();
  const hasVideo = activitie.videoUrl !== "";

  function handleDelete(id: string) {
    toast("এই post delete করবেন?", {
      description: "Post টি delete হয়ে যাবে।",
      duration: 10000,
      action: {
        label: "Delete",
        onClick: () => runDelete(id),
      },
      cancel: {
        label: "বাতিল",
        onClick: () => {},
      },
    });
  }

  async function runDelete(id: string) {
    try {
      setIsDeleting(true);
      const res = await deleteActivitie(id);

      if (res?.success === false) {
        toast.error(res?.message ?? "Post delete করা যায়নি");
        return;
      }

      toast.success("Post delete করা হয়েছে");
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <tr className="border-b border-gray-100 last:border-0 dark:border-gray-800">
      <td className="px-3 py-3.5 align-middle">
        <p className="truncate font-semibold">{activitie.title}</p>
        <p className="mt-0.5 flex gap-2 text-xs text-gray-500">
          <span>🖼️ {activitie.imageUrl.length}</span>
          {hasVideo && <span>🎬 Video</span>}
        </p>
      </td>
      <td className="truncate px-3 py-3.5 align-middle">
        {activitie.projectLocation}
      </td>
      <td className="px-3 py-3.5 align-middle">{activitie.duration}</td>
      <td className="whitespace-nowrap px-3 py-3.5 align-middle text-gray-500">
        {formatDate(activitie.createdAt)}
      </td>
      <td className="px-3 py-3.5 align-middle">
        <RowActions
          activitieId={activitie._id}
          onDelete={handleDelete}
          isDeleting={isDeleting}
        />
      </td>
    </tr>
  );
}
