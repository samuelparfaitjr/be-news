const {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  checkArticleExists,
} = require("../models/articles.model");

module.exports = getArticles = (req, res, next) => {
  const query = req.query;
  console.log(query);
  fetchArticles()
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
