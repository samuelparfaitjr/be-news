const express = require("express");
const { getTopics } = require("./controllers/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/topics", getTopics);
