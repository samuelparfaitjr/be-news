const {
  fetchComments,
  deleteCommentById,
  checkCommentExists,
  fetchCommentById,
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

module.exports = getCommentById = (req, res, next) => {
  const { comment_id } = req.params;
  Promise.all([checkCommentExists(comment_id), fetchCommentById(comment_id)])
    .then(([rowCount, comment]) => {
      res.status(200).send(comment);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = removeCommentById = (req, res, next) => {
  const { comment_id } = req.params;

  deleteCommentById(comment_id)
    .then((comment) => {
      res.status(204).send(comment);
    })
    .catch((err) => {
      next(err);
    });
};
