const db = require("../db/connection");

exports.fetchArticles = async (sort_by, order, topic) => {
  const sort = sort_by === undefined ? "created_at" : sort_by;
  const option = order === undefined ? "DESC" : order.toUpperCase();
  let result;

  let query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY articles.${sort} ${option};`;

  let queryByTopic = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id WHERE articles.topic = $1 GROUP BY articles.article_id ORDER BY articles.${sort} ${option};`;

  if (topic === undefined) {
    result = await db.query(query);
  } else {
    result = await db.query(queryByTopic, [topic]);
  }

  if (result.rows.length === 0) {
    return Promise.reject({ status: 404, message: "Topic Not Found" });
  } else {
    return result.rows;
  }
};

exports.fetchArticleById = async (article_id) => {
  let query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id
WHERE articles.article_id = $1 GROUP BY articles.article_id;`;
  const {
    rows: [article],
  } = await db.query(query, [article_id]);

  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    return article;
  }
};

exports.fetchArticleComments = async (article_id) => {
  const { rows } = await db.query(
    "SELECT * FROM comments WHERE article_id = $1;",
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

