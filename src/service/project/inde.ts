import { TProject, TProjectPayload } from "@/types/project";
import { apiClientRaw, ApiResponse } from "../apiClient";

// Create project
export const createProject = async (
  payload: TProjectPayload,
): Promise<ApiResponse<TProject>> => {
  return apiClientRaw<TProject>("/projects/create-project", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

// Shob project
export const getAllProjects = async (
  query?: Record<string, string | number>,
): Promise<ApiResponse<TProject[]>> => {
  const queryString = query
    ? "?" +
      new URLSearchParams(
        Object.entries(query).map(([key, value]) => [key, String(value)]),
      ).toString()
    : "";

  return apiClientRaw<TProject[]>(`/projects${queryString}`, {
    method: "GET",
  });
};

// Single project
export const getSingleProject = async (
  id: string,
): Promise<ApiResponse<TProject>> => {
  return apiClientRaw<TProject>(`/projects/${id}`, {
    method: "GET",
  });
};

// Delete project (soft delete)
export const deleteProject = async (id: string): Promise<ApiResponse<null>> => {
  return apiClientRaw<null>(`/projects/${id}/delete`, {
    method: "PATCH",
  });
};
