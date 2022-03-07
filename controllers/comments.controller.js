const {
  fetchComments,
  deleteCommentById,
} = require("../models/comments.model");

module.exports = getComments = (req, res, next) => {
  fetchComments()
    .then((data) => {
      res.status(200).send({ comments: data });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = removeCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  console.log(comment_id);
  deleteCommentById(comment_id)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      next(err);
    });
};
