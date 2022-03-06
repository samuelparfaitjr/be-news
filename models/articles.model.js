const { rows } = require("pg/lib/defaults");
const db = require("../db/connection");

exports.fetchArticles = async () => {
  const query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
COUNT(comments.article_id) AS comment_count FROM articles LEFT JOIN comments ON articles.article_id = comments.article_id GROUP BY articles.article_id ORDER BY articles.created_at DESC;`;
  const { rows } = await db.query(query);
  return rows;
};

exports.fetchArticleById = async (article_id) => {
  const query = `SELECT articles.article_id, articles.title, articles.topic, articles.author, articles.body, articles.created_at, articles.votes,
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
