const { rows } = require("pg/lib/defaults");
const db = require("../db/connection");

exports.fetchArticles = async () => {
  const { rows } = await db.query("SELECT * FROM articles;");
  return rows;
};

exports.fetchArticleById = async (article_id) => {
  const {
    rows: [article],
  } = await db.query("SELECT * FROM articles WHERE article_id = $1;", [
    article_id,
  ]);
  const {
    rows: [{ count }],
  } = await db.query("SELECT COUNT(*) FROM comments WHERE article_id = $1;", [
    article_id,
  ]);
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Article Not Found" });
  } else {
    const articleObj = { ...article };
    articleObj["comment_count"] = +count;
    console.log(articleObj);
    return articleObj;
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
