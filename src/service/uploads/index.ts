import { apiClientRaw, ApiResponse } from "../apiClient";


export type TUploadedFile = {
  url: string;
  publicId: string;
};

// apiClient FormData hole Content-Type nijei browser-ke set korte dey
export const uploadFile = async (
  file: File,
): Promise<ApiResponse<TUploadedFile>> => {
  const formData = new FormData();
  formData.append("file", file);

  return apiClientRaw<TUploadedFile>("/upload/upload_file", {
    method: "POST",
    body: formData,
  });
};
