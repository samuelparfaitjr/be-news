const { rows } = require("pg/lib/defaults");
const db = require("../db/connection");

exports.fetchArticles = async () => {
  const { rows } = await db.query("SELECT * FROM articles;");
  return rows;
};

exports.fetchArticleById = async (article_id) => {
  const { rows: [article] } = await db.query(
    "SELECT * FROM articles WHERE article_id = $1;",
    [article_id]
  );
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    return article;
  }
};

exports.fetchArticleComments = async (article_id) => {
  const { rows } = await db.query(
    "SELECT * FROM comments WHERE article_id = $1",
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
