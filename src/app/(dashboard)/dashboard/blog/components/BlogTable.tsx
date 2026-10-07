// components/blog/BlogTable.tsx
"use client";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TBlog } from "@/types/blog";
import { deleteBlog } from "@/service/blog";

type BlogTableProps = {
  blogs: TBlog[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default function BlogTable({ blogs }: BlogTableProps) {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const router = useRouter();

  function handleDelete(id: string) {
    toast("এই blog delete করবেন?", {
      description: "Blog টি delete হয়ে যাবে।",
      duration: 10000,
      action: {
        label: "হ্যাঁ",
        onClick: () => runDelete(id),
      },
      cancel: {
        label: "না",
        onClick: () => {},
      },
    });
  }

  async function runDelete(id: string) {
    try {
      setLoadingId(id);
      const res = await deleteBlog(id);

      if (res?.success === false) {
        toast.error(res?.message ?? "Blog delete করা যায়নি");
        return;
      }

      toast.success("Blog delete করা হয়েছে");
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন");
    } finally {
      setLoadingId(null);
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Thumbnail</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {blogs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No blogs found
              </TableCell>
            </TableRow>
          ) : (
            blogs.map((blog) => (
              <TableRow key={blog._id}>
                <TableCell>
                  <div className="relative h-12 w-16 overflow-hidden rounded-md bg-muted">
                    {blog.images?.[0] && (
                      <Image
                        src={blog.images[0]}
                        alt={blog.title}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </div>
                </TableCell>

                <TableCell className="max-w-xs truncate font-medium">
                  {blog.title}
                </TableCell>

                <TableCell>{formatDate(blog.createdAt)}</TableCell>

                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button size="icon" variant="outline">
                      <Link href={`/dashboard/blogs/edit/${blog._id}`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>

                    <Button
                      size="icon"
                      variant="destructive"
                      disabled={loadingId === blog._id}
                      onClick={() => handleDelete(blog._id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
