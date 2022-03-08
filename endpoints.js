module.exports = [
  {
    method: "GET",
    status: 200,
    path: "/api",
    description: "Lists all available endpoints.",
    queries: [],
    example: {},
  },
  {
    method: "GET",
    status: 200,
    path: "/api/topics",
    description: "Lists all available topics.",
    queries: [],
    example: {
      topics: [
        {
          slug: "coding",
          description: "Code is love, code is life",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/articles",
    description: "Lists all available articles.",
    queries: ["sort_by", "order", "topic", "author"],
    example: {
      articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/articles/:article_id",
    description: "Responds with the requested article.",
    queries: [],
    example: {
      articles: [
        {
          article_id: 34,
          title: "The Notorious MSG’s Unlikely Formula For Success",
          topic: "cooking",
          author: "grumpy19",
          body: "The quick brown fox jumps over the lazy dog.",
          created_at: "2020-11-22T11:13:00.000Z",
          votes: 0,
          comment_count: "11",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/articles/:article_id/comments",
    description: "Lists the requested article comments",
    queries: [],
    example: {
      comments: [
        {
          comment_id: 33,
          body: "Explicabo perspiciatis voluptatem sunt tenetur maxime aut. Optio totam modi. Perspiciatis et quia.",
          article_id: 1,
          author: "cooljmessy",
          votes: 4,
          created_at: "2019-12-31T21:21:00.000Z",
        },
      ],
    },
  },
  {
    method: "POST",
    status: 200,
    path: "/api/articles/:article_id/comments",
    description: "Create a new comment",
    queries: [],
    example: {
      body: [
        {
          username: "tickle122",
          body: "it works!",
        },
      ],
    },
  },
  {
    method: "PATCH",
    status: 200,
    path: "/api/articles/:article_id",
    description: "Updates an article with key from the request body",
    queries: [],
    example: {
      body: [
        {
          inc_votes: "cat",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/users",
    description: "Lists all users",
    queries: [],
    example: {
      users: [
        {
          username: "tickle122",
          name: "Tom Tickle",
          avatar_url:
            "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/comments",
    description: "Lists all comments",
    queries: [],
    example: {
      commments: [
        {
          comment_id: 5,
          body: "Quod qui quia dignissimos sit tempore vel reprehenderit.",
          article_id: 17,
          author: "weegembump",
          votes: -5,
          created_at: "2020-04-03T20:17:00.000Z",
        },
      ],
    },
  },
  {
    method: "GET",
    status: 200,
    path: "/api/comments/:comment_id",
    description: "Responds with the requested comment",
    queries: [],
    example: {
      comment: [
        {
          comment_id: 5,
          body: "Quod qui quia dignissimos sit tempore vel reprehenderit. Ipsa ipsa veritatis architecto corporis et et non. Sed alias occaecati eum dignissimos sint eius. Ad ea iste quas quia velit libero voluptatem voluptatem. Animi illo nisi nulla quia sapiente omnis dolorem nulla. Sunt dolor similique.",
          article_id: 17,
          author: "chewbaka",
          votes: 5,
          created_at: "2020-04-03T20:17:00.000Z",
        },
      ],
    },
  },
  {
    method: "DELETE",
    status: 204,
    path: "/api/comments/:comment_id",
    description:
      "Deletes the requested comment. If the comment is currently in any article it is also removed from that article.",
    queries: [],
    example: { status: "204 No Content" },
  },
];
