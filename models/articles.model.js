const db = require("../db/connection");

exports.fetchArticles = async (sort_by, order, topic, author) => {
  let options = [];
  let query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id`;

  if (topic !== undefined) {
    options.push(topic);
    query += ` WHERE topic = $1`;
  }

  if (author !== undefined) {
    if (options.length) {
      query += ` AND`;
    } else {
      query += ` WHERE`;
    }
    options.push(author);
    query += ` articles.author = $${options.length}`;
  }

  if (sort_by === undefined) {
    sort_by = "created_at";
  } else if (
    ![
      "article_id",
      "title",
      "topic",
      "author",
      "created_at",
      "votes",
      "comment_count",
    ].includes(sort_by)
  ) {
    return Promise.reject({ status: 400, message: "Invalid Sort Query" });
  }

  if (order === undefined) {
    order = "desc";
  } else if (!["asc", "desc"].includes(order)) {
    return Promise.reject({ status: 400, message: "Invalid Order Query" });
  }

  query += ` GROUP BY articles.article_id ORDER BY articles.${sort_by} ${order};`;

  const results = await db.query(query, options);

  if (results.rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    return results.rows;
  }
};

exports.fetchArticleById = async (article_id) => {
  let query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id
WHERE articles.article_id = $1 GROUP BY articles.article_id;`;
  const { rows } = await db.query(query, [article_id]);

  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    return rows[0];
  }
};

exports.fetchArticleComments = async (article_id) => {
  const { rows } = await db.query(
    "SELECT * FROM comments WHERE article_id = $1 ORDER BY created_at DESC;",
    [article_id]
  );
  return rows;
};

exports.checkArticleExists = async (article_id) => {
  const { rows } = await db.query(
    "SELECT * FROM articles WHERE article_id = $1;",
    [article_id]
  );
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    return { rowCount: rows.length };
  }
};

exports.insertArticleComment = async (body, article_id, username) => {
  const { rows } = await db.query(
    `INSERT INTO comments (body, article_id, author) VALUES ($1, $2, $3) RETURNING *;`,
    [body, article_id, username]
  );
  return rows[0];
};

exports.updateArticle = async (article_id, inc_votes) => {
  const { rows } = await db.query(
    `UPDATE articles SET votes = (votes + $2) WHERE article_id = $1 RETURNING *;`,
    [article_id, inc_votes]
  );
  return rows;
};
