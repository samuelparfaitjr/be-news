const { fetchTopics } = require("../models/topics.model");

module.exports = getTopics = (req, res, next) => {
  fetchTopics()
    .then((data) => {
      res.status(200).send({ topics: data });
      console.log(data);
    })
    .catch((err) => {
      next(err);
    });
};
