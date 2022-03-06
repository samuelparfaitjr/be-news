const request = require("supertest");
const db = require("../db/connection");
const data = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const app = require("../app");

afterAll(() => db.end());
beforeAll(() => seed(data));

describe("API", () => {
  describe("Method: GET", () => {
    describe("/api", () => {
      test("should return a JSON describing all the available endpoints", () => {
        request(app)
          .get("/api")
          .expect(200)
          .then(({ body: { endpoints } }) => {
            expect(endpoints).toBeInstanceOf(Array);
            endpoints.forEach((endpoint) => {
              expect(Object.keys(endpoint)).toEqual([
                "method",
                "path",
                "description",
                "queries",
                "example",
              ]);
            });
          });
      });
    });
    describe("Topics", () => {
      describe("/api/topics", () => {
        test("should return status 200 and an array of topics", () => {
          return request(app)
            .get("/api/topics")
            .expect(200)
            .then(({ body: { topics } }) => {
              expect(topics).toBeInstanceOf(Array);
              topics.forEach((topic) => {
                expect(Object.keys(topic)).toEqual(["slug", "description"]);
              });
              expect(topics[0]).toEqual({
                slug: "mitch",
                description: "The man, the Mitch, the legend",
              });
            });
        });
      });
    });
    describe("Articles", () => {
      describe("/api/articles", () => {
        test("should return status 200 and an array of articles", () => {
          return request(app)
            .get("/api/articles")
            .expect(200)
            .then(({ body: { articles } }) => {
              expect(articles).toBeInstanceOf(Array);
              articles.forEach((article) => {
                expect(Object.keys(article)).toEqual([
                  "article_id",
                  "title",
                  "topic",
                  "author",
                  "body",
                  "created_at",
                  "votes",
                  "comment_count",
                ]);
              });
            });
        });
      });
      describe("/api/articles/:article_id", () => {
        test("should return status 200 and an article object", () => {
          return request(app)
            .get("/api/articles/1")
            .expect(200)
            .then(({ body: article }) => {
              console.log(article);
              expect(+article.comment_count).toBe(11);
              expect(Object.keys(article)).toEqual([
                "article_id",
                "title",
                "topic",
                "author",
                "body",
                "created_at",
                "votes",
                "comment_count",
              ]);
            });
        });
      });
      describe("/api/articles/:article_id/comments", () => {
        test("should return status 200 and an array of comments", () => {
          return request(app)
            .get("/api/articles/1/comments")
            .expect(200)
            .then(({ body: { comments } }) => {
              expect(comments).toHaveLength(11);
              expect(comments[0]).toEqual({
                comment_id: 2,
                body: "The beautiful thing about treasure is that it exists. Got to find out what kind of sheets these are; not cotton, not rayon, silky.",
                article_id: 1,
                author: "butter_bridge",
                votes: 14,
                created_at: "2020-10-31T03:03:00.000Z",
              });
              comments.forEach((comment) => {
                expect(Object.keys(comment)).toEqual([
                  "comment_id",
                  "body",
                  "article_id",
                  "author",
                  "votes",
                  "created_at",
                ]);
              });
            });
        });
      });
    });
    describe("Users", () => {
      describe("/api/users", () => {
        test("should return status 200 and an array of users with keys `username`, `name`,`avatar_url`", () => {
          return request(app)
            .get("/api/users")
            .expect(200)
            .then(({ body: { users } }) => {
              expect(users[0]).toEqual({
                username: "butter_bridge",
                name: "jonny",
                avatar_url:
                  "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
              });
              users.forEach((user) => {
                expect(Object.keys(user)).toEqual([
                  "username",
                  "name",
                  "avatar_url",
                ]);
              });
            });
        });
      });
    });
  });
});
