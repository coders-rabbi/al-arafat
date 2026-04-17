import { useState, useEffect } from "react";

// ডাটার টাইপ ডিফাইন করা (Standard Practice)
export interface BlogItem {
  id: number;
  date: string;
  title: string;
  description: string;
  image_url: string;
}

const useBlog = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // public ফোল্ডার থেকে ডাটা ফেচ করা
        const response = await fetch("/fake.json");

        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }

        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export default useBlog;
