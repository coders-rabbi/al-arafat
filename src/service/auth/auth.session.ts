import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

// আপনার JWT payload এ যা যা আছে, সেই অনুযায়ী field মিলিয়ে নিন
export type TUserInfo = {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export const getUserInfo = async (): Promise<TUserInfo | null> => {
  const token = (await cookies()).get("accessToken")?.value;
  if (!token) return null;

  try {
    const decoded = jwtDecode<TUserInfo>(token);
    if (decoded.exp * 1000 < Date.now()) return null; // মেয়াদ শেষ
    return decoded;
  } catch {
    return null; // ভুল বা নষ্ট token
  }
};

export const isLoggedIn = async (): Promise<boolean> => {
  return !!(await getUserInfo());
};
