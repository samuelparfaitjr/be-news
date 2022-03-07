const {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  checkArticleExists,
  insertArticleComment,
  updateArticle,
} = require("../models/articles.model");

module.exports = getArticles = (req, res, next) => {
  const { sort_by, order, topic } = req.query;
  fetchArticles(sort_by, order, topic)
    .then((data) => {
      res.status(200).send({ articles: data });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getArticleById = (req, res, next) => {
  const { article_id } = req.params;
  Promise.all([checkArticleExists(article_id), fetchArticleById(article_id)])
    .then(([rowCount, article]) => {
      res.status(200).send(article);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = getArticleComments = (req, res, next) => {
  const { article_id } = req.params;
  Promise.all([
    checkArticleExists(article_id),
    fetchArticleComments(article_id),
  ])
    .then(([rowCount, data]) => {
      res.status(200).send({ comments: data });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = postArticleComment = (req, res, next) => {
  const { username, body } = req.body;
  const { article_id } = req.params;
  Promise.all([
    checkArticleExists(article_id),
    insertArticleComment(body, article_id, username),
  ])
    .then(([rowCount, results]) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = patchArticle = (req, res, next) => {
  const { article_id } = req.params;
  const { inc_votes } = req.body;

  Promise.all([
    checkArticleExists(article_id),
    updateArticle(article_id, inc_votes),
  ])
    .then(([rowCount, results]) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      next(err);
    });
};

