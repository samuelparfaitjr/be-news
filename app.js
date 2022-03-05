const express = require("express");
const res = require("express/lib/response");
const api = require("./controllers/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/articles", getArticles);
app.get("/api/articles/:article_id", getArticleById);
app.get("/api/articles/:article_id/comments", getArticleComments);
app.get("/api/users", getUsers);

app.all("/*", (req, res) => {
  res.status(404).send({ message: "404 Not Found" });
});

module.exports = app;
