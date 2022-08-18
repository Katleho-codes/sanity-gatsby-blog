export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62fdf4ed1c14b67a5acf528f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-1v4v3bwn",
                  apiId: "b5b40107-9e2f-4efa-b671-dbc381059808",
                },
                {
                  buildHookId: "62fdf4edc009ce7d334787d5",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-zwm93wmp",
                  apiId: "05ca49ae-da1e-42fc-b718-31245ef2e646",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Katleho-codes/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-zwm93wmp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
