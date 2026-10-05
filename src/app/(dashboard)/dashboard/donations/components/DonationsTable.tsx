// components/donation/DonationTable.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { updateDonationStatus } from "@/service/donation";
import { TDonation } from "@/types/donation";

type TDonationStatus = "pending" | "verified" | "rejected";

type DonationTableProps = {
  donations: TDonation[];
};

const statusUI = {
  pending: { icon: "⏳", cls: "bg-amber-100 text-amber-700" },
  verified: { icon: "✅", cls: "bg-emerald-100 text-emerald-700" },
  rejected: { icon: "❌", cls: "bg-rose-100 text-rose-700" },
} as const;

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default function DonationTable({ donations }: DonationTableProps) {
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleStatus(
    id: string,
    status: Exclude<TDonationStatus, "pending">,
  ) {
    const ok = window.confirm(
      status === "verified"
        ? "এই donation verify করবেন?"
        : "এই donation reject করবেন?",
    );
    if (!ok) return;

    try {
      setLoadingId(id);
      const res = await updateDonationStatus(id, status);

      if (res?.success === false) {
        alert(res?.message || "Status update failed");
        return;
      }

      router.refresh(); // সার্ভার পেজ নতুন ডেটা আনবে
    } catch (err) {
      console.error(err);
      alert("কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">SL NO:</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Donate Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {donations.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No donations found
              </TableCell>
            </TableRow>
          ) : (
            donations.map((item, index) => {
              const s =
                statusUI[item.status as keyof typeof statusUI] ??
                statusUI.pending;
              const isLoading = loadingId === item._id;

              return (
                <TableRow key={item._id}>
                  <TableCell>{String(index + 1).padStart(2, "0")}</TableCell>

                  <TableCell className="max-w-xs truncate font-medium">
                    {item?.name}
                  </TableCell>

                  <TableCell className="max-w-xs truncate font-medium">
                    {item?.phone} ({item?.method})
                  </TableCell>

                  <TableCell className="font-medium">
                    ৳{Number(item?.amount || 0).toLocaleString("en-BD")}
                  </TableCell>

                  <TableCell>{formatDate(item.createdAt)}</TableCell>

                  <TableCell>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium capitalize ${s.cls}`}
                    >
                      {s.icon} {item.status}
                    </span>
                  </TableCell>

                  <TableCell className="text-right">
                    {item.status === "pending" && (
                      <div className="flex justify-end gap-2">
                        <Button
                          size="icon"
                          variant="outline"
                          title="Verify"
                          disabled={isLoading}
                          onClick={() => handleStatus(item._id, "verified")}
                        >
                          <Check className="h-4 w-4 text-emerald-600" />
                        </Button>

                        <Button
                          size="icon"
                          variant="outline"
                          title="Reject"
                          disabled={isLoading}
                          onClick={() => handleStatus(item._id, "rejected")}
                        >
                          <X className="h-4 w-4 text-rose-600" />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
