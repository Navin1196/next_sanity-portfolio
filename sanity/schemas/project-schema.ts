const project = {
  name: "project",
  title: "projects",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "title2",
      title: "title2",
      type: "string",
    },

    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "name" },
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
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default project;
