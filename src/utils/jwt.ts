import { jwtDecode, type JwtPayload } from "jwt-decode";

export type AuthPayload = JwtPayload & {
  _id: string;
  adminName: string;
  email: string;
  role: string;
  profileImage: string;
};

export const decodedToken = (token: string): AuthPayload => {
  return jwtDecode<AuthPayload>(token);
};
