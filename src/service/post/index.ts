import { TPost, TPostPayload, TUpdatePostPayload } from "@/types/post";
import { apiClientRaw, ApiResponse } from "../apiClient";

export const createPost = async (
  payload: TPostPayload,
): Promise<ApiResponse<TPost>> => {
  return apiClientRaw<TPost>("/posts/create-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const getAllPosts = async (): Promise<ApiResponse<TPost[]>> => {
  return apiClientRaw<TPost[]>("/posts", {
    method: "GET",
  });
};

export const getActivityById = async (
  postId: string,
): Promise<ApiResponse<TPost>> => {
  return apiClientRaw<TPost>(`/posts/${postId}`, {
    method: "GET",
  });
};

export const updatePost = async (
  postId: string,
  payload: TUpdatePostPayload,
): Promise<ApiResponse<TPost>> => {
  return apiClientRaw<TPost>(`/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const deletePost = async (
  postId: string,
): Promise<ApiResponse<null>> => {
  return apiClientRaw<null>(`/posts/${postId}`, {
    method: "DELETE",
  });
};
