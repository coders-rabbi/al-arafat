export type TProjectStatus = "Completed" | "Ongoing";

export type TProject = {
  _id: string;
  title: string;
  duration: string; // e.g. "3 months"
  location: string;
  beneficiary: number | string;
  expense: number | string;
  status: TProjectStatus;
  isDeleted?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

// Project create korar somoy jei data pathabe
export type TProjectPayload = Omit<
  TProject,
  "_id" | "isDeleted" | "createdAt" | "updatedAt"
>;