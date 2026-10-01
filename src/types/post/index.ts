export type TPost = {
  _id: string;
  title: string;
  content: string;
  imageUrl: string[];
  videoUrl: string;
  projectAim: string;
  benificiary: string;
  expense_details: string;
  projectLocation: string;
  duration: string;
  createdAt: string;
  updatedAt: string;
};

export type TPostPayload = {
  title: string;
  content: string;
  imageUrl?: string[];
  videoUrl?: string;
  projectAim: string;
  benificiary: string;
  expense_details: string;
  projectLocation: string;
  duration: string;
};

export type TUpdatePostPayload = Partial<TPostPayload>;
