const page = {
  name: "page",
  title: "pages",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "title2",
      title: "Title2",
      type: "string",
    },
    {
      name: "slug",
      titte: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "content",
      title: "content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "content2",
      title: "Content2",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
export default page;
