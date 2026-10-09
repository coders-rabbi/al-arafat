import {
  TActivitie,
  TActivitiePayload,
  TUpdatePostPayload,
} from "@/types/Activities";
import { apiClientRaw, ApiResponse } from "../apiClient";

export const createActivitie = async (
  payload: TActivitiePayload,
): Promise<ApiResponse<TActivitie>> => {
  return apiClientRaw<TActivitie>("/activities/activitie-post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const getAllActivitie = async (): Promise<ApiResponse<TActivitie[]>> => {
  return apiClientRaw<TActivitie[]>("/activities", {
    method: "GET",
  });
};

export const getActivityById = async (
  activitieId: string,
): Promise<ApiResponse<TActivitie>> => {
  return apiClientRaw<TActivitie>(`/activities/${activitieId}`, {
    method: "GET",
  });
};

export const updateActivitie = async (
  activitieId: string,
  payload: TUpdatePostPayload,
): Promise<ApiResponse<TActivitie>> => {
  return apiClientRaw<TActivitie>(`/activities/${activitieId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const deleteActivitie = async (
  activitieId: string,
): Promise<ApiResponse<null>> => {
  return apiClientRaw<null>(`/activities/${activitieId}/delete`, {
    method: "PATCH",
  });
};
