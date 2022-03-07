const db = require("../db/connection");

exports.fetchComments = async () => {
  const { rows } = await db.query("SELECT * FROM comments;");
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "There are no comments" });
  } else {
    return rows;
  }
};

exports.fetchCommentById = async (comment_id) => {
  const { rows } = await db.query(
    "SELECT * FROM comments WHERE comment_id = $1;",
    [comment_id]
  );
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Comment Not Found" });
  } else {
    return rows[0];
  }
};

exports.checkCommentExists = async (comment_id) => {
  const { rows } = await db.query(
    "SELECT * FROM comments WHERE comment_id = $1;",
    [comment_id]
  );
  if (rows.length === 0) {
    return Promise.reject({ status: 404, message: "Comment Not Found" });
  } else {
    return { rowCount: rows.length };
  }
};

exports.deleteCommentById = async (comment_id) => {
  const { rows } = await db.query(
    "DELETE FROM comments WHERE comment_id = $1 RETURNING *;",
    [comment_id]
  );
  return rows[0];
};
