module.exports = [
  {
    method: "GET",
    path: "/api",
    description:
      "serves up a json representation of all the available endpoints of the api",
    queries: [],
    example: {},
  },
  {
    method: "GET",
    path: "/api/topics",
    description: "serves an array of all topics",
    queries: [],
    example: {
      topics: [{ slug: "football", description: "Footie!" }],
    },
  },
  {
    method: "GET",
    path: "/api/articles",
    description: "serves an array of all articles",
    queries: ["author", "topic", "sort_by", "order"],
    example: {
      articles: [
        {
          title: "Seafood substitutions are increasing",
          topic: "cooking",
          author: "weegembump",
          body: "Text from the article..",
          created_at: 1527695953341,
        },
      ],
    },
  },
];
