import { TMedia, TMediaPayload, TMediaType } from "@/types/media";
import { apiClientRaw, ApiResponse } from "../apiClient";

export const createMedia = async (
  payload: TMediaPayload,
): Promise<ApiResponse<TMedia>> => {
  return apiClientRaw<TMedia>("/media/create-media", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

export const getAllMedia = async (query?: {
  type?: TMediaType;
}): Promise<ApiResponse<TMedia[]>> => {
  const queryString = query?.type ? `?type=${query.type}` : "";

  return apiClientRaw<TMedia[]>(`/media${queryString}`, {
    method: "GET",
  });
};

// Single media
export const getSingleMedia = async (
  id: string,
): Promise<ApiResponse<TMedia>> => {
  return apiClientRaw<TMedia>(`/media/${id}`, {
    method: "GET",
  });
};

// Title update
export const updateMedia = async (
  id: string,
  payload: { title: string },
): Promise<ApiResponse<TMedia>> => {
  return apiClientRaw<TMedia>(`/media/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

// Single delete
export const deleteMedia = async (
  id: string,
): Promise<ApiResponse<TMedia | null>> => {
  return apiClientRaw<TMedia | null>(`/media/${id}`, {
    method: "DELETE",
  });
};

// Onek gulo ekshathe delete
export const bulkDeleteMedia = async (
  ids: string[],
): Promise<ApiResponse<{ deletedCount: number }>> => {
  return apiClientRaw<{ deletedCount: number }>("/media/bulk-delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ids }),
  });
};
