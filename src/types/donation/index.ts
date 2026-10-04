// src/types/donation.ts
export type TDonationMethod = "bkash" | "nagad" | "rocket" | "upay";
export type TDonationStatus = "pending" | "verified" | "rejected";

export type TDonationPayload = {
  amount: number;
  method: TDonationMethod;
  name: string;
  phone: string;
  trxId: string;
  note?: string;
};

export type TDonation = TDonationPayload & {
  _id: string;
  status: TDonationStatus;
  createdAt: string;
  updatedAt: string;
};