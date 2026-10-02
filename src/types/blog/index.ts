// types/blog.ts
export type TBlogPayload = {
  title: string;
  content: string;
  images: string[];
};
export type TBlog = {
  _id: string;
  title: string;
  content: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};
