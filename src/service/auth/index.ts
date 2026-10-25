import { TLoginPayload } from "@/types/auth";
import { ApiResponse, apiClientRaw } from "../apiClient";

type TLoginResponse = {
  accessToken: string;
};

export const adminLogin = async (
  payload: TLoginPayload,
): Promise<ApiResponse<TLoginResponse>> => {
  return apiClientRaw<TLoginResponse>("/auth/admin-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
};
