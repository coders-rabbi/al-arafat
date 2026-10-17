import { TBlog, TBlogPayload } from "@/types/blog";
import { apiClientRaw, ApiResponse } from "../apiClient";

export const createBlog = async (
  payload: TBlogPayload,
): Promise<ApiResponse<TBlog>> => {
  return apiClientRaw<TBlog>("/blogs/create-blog", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

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

// Safe version: kokhono throw korbe na, fail korle empty array dibe
export const getAllBlogsSafe = async (
  query?: Record<string, string | number>,
): Promise<TBlog[]> => {
  try {
    const res = await getAllBlogs(query);
    return res?.data ?? [];
  } catch (error) {
    console.error("getAllBlogs failed:", error);
    return [];
  }
};

// Single blog
export const getSingleBlog = async (
  id: string,
): Promise<ApiResponse<TBlog>> => {
  return apiClientRaw<TBlog>(`/blogs/${id}`, {
    method: "GET",
  });
};

// Delete blog (soft delete)
export const deleteBlog = async (id: string): Promise<ApiResponse<null>> => {
  return apiClientRaw<null>(`/blogs/${id}/delete`, {
    method: "PATCH",
  });
};