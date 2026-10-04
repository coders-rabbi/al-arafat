
import { TDonation, TDonationPayload, TDonationStatus } from "@/types/donation";
import { apiClientRaw, ApiResponse } from "../apiClient";


export const createDonation = async (
  payload: TDonationPayload,
): Promise<ApiResponse<TDonation>> => {
  return apiClientRaw<TDonation>("/donations/create-donation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};

// অ্যাডমিনের জন্য
export const getAllDonations = async (query?: {
  status?: TDonationStatus;
}): Promise<ApiResponse<TDonation[]>> => {
  const queryString = query?.status ? `?status=${query.status}` : "";

  return apiClientRaw<TDonation[]>(`/donations${queryString}`, {
    method: "GET",
  });
};

// অ্যাডমিনের জন্য
export const updateDonationStatus = async (
  id: string,
  status: TDonationStatus,
): Promise<ApiResponse<TDonation>> => {
  return apiClientRaw<TDonation>(`/donations/${id}/status`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
};