"use client";

import { useState, useEffect } from "react";

// ডাটা টাইপ ডিক্লেয়ারেশন
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
        // আপনার API URL: http://localhost:5000/blogs
        const response = await fetch("https://al-arafatfoundation-server.vercel.app/blogs");

        if (!response.ok) {
          throw new Error("ডাটা ফেচ করতে সমস্যা হয়েছে!");
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
