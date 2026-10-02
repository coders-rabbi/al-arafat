import { TBlog, TBlogPayload } from "@/types/blog";
import { apiClientRaw, ApiResponse } from "../apiClient";

// service/blog.ts
export const createBlog = async (
  payload: TBlogPayload,
): Promise<ApiResponse<TBlog>> => {
  return apiClientRaw<TBlog>("/blogs/create-blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

// service/blog.ts

// Shob blog
export const getAllBlogs = async (
  query?: Record<string, string | number>,
): Promise<ApiResponse<TBlog[]>> => {
  const queryString = query
    ? "?" +
      new URLSearchParams(
        Object.entries(query).map(([key, value]) => [key, String(value)]),
      ).toString()
    : "";

  return apiClientRaw<TBlog[]>(`/blogs${queryString}`, {
    method: "GET",
  });
};

// Single blog
export const getSingleBlog = async (
  id: string,
): Promise<ApiResponse<TBlog>> => {
  return apiClientRaw<TBlog>(`/blogs/${id}`, {
    method: "GET",
  });
};
