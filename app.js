const express = require("express");
const api = require("./controllers/index");
const {
  errorHandler,
  clientErrorHandler,
  serverErrorHandler,
} = require("./error");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", getEndpoints);
app.get("/api/topics", getTopics);
app.get("/api/articles", getArticles);
app.get("/api/articles/:article_id", getArticleById);
app.get("/api/articles/:article_id/comments", getArticleComments);
app.get("/api/users", getUsers);
app.get("/api/comments", getComments);
app.get("/api/comments/:comment_id", getCommentById);

app.post("/api/articles/:article_id/comments", postArticleComment);

app.patch("/api/articles/:article_id", patchArticle);

app.delete("/api/comments/:comment_id", removeCommentById);

app.all("/*", (req, res) => {
  res.status(404).send({ message: "404 Not Found" });
});

app.use(errorHandler);
app.use(clientErrorHandler);
// app.use(serverErrorHandler);

module.exports = app;
