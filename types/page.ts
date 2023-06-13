import { PortableTextBlock } from "sanity";

export type page = {
  _id: "string";
  _createdAt: "Date";
  title: "string";
  title2: "string";
  image: "string";
  slug: "string";
  content: PortableTextBlock[];
  content2: PortableTextBlock[];
};
