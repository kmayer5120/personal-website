export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "linkToDeployment",
            title: "Link to Deployment",
            type: "string",
        },
        {
            name: "linkToGitHub",
            title: "Link to GitHub Repo",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
        },
        {
            name: "projectCategories",
            title: "Project Categories",
            type: "array",
            of: [{ type: "reference", to: { type: "projectCategory" } }],
        },
        {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
        },
        {
            name: "body",
            title: "Body",
            type: "blockContent",
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
        },
    },
};
