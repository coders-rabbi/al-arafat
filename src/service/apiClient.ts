const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://gen-voice-backend.onrender.com/api/v1";

export type ApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

const buildHeaders = (options?: RequestInit) => {
  const headers = new Headers(options?.headers);

  // FormData (file upload) hole Content-Type browser nijei set korbe
  if (!headers.has("Content-Type") && !(options?.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  return headers;
};

export const apiClient = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const json = await apiClientRaw<T>(endpoint, options);
  return json.data;
};

export const apiClientRaw = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<ApiResponse<T>> => {
  const url = BASE_URL ? `${BASE_URL}${endpoint}` : endpoint;

  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(options),
  });

  let json: ApiResponse<T> | null = null;
  try {
    json = await response.json();
  } catch {}

  if (!response.ok) {
    const message =
      json?.message || `API Error: ${response.status} ${response.statusText}`;
    throw new Error(message);
  }

  if (!json) {
    throw new Error("Invalid response from server");
  }

  return json;
};
