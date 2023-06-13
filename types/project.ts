import { PortableTextBlock } from "sanity";

export type project = {
  _id: string;
  _createdAt: string;
  title: string;
  title2: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
};
