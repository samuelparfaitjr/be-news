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
              console.log(endpoint);
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
        test("should return status 200 and an array of topics with keys `slug`, `description`", () => {
          return request(app)
            .get("/api/topics")
            .expect(200)
            .then(({ body: { topics } }) => {
              expect(topics).toBeInstanceOf(Array);
              topics.forEach((topic) => {
                expect(Object.keys(topic)).toEqual(["slug", "description"]);
              });
            });
        });
      });
    });
    describe("Articles", () => {
      describe("/api/articles", () => {
        test("should return status 200 and an array of articles with keys `article_id`, `title`,`topic`, `author`,`body`, `created_at`, `votes`", () => {
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
                ]);
              });
            });
        });
      });
      describe("/api/articles", () => {
        test("should return status 200 and an array of users with keys `username`, `name`,`avatar_url`", () => {
          return request(app)
            .get("/api/users")
            .expect(200)
            .then(({ body: { users } }) => {
              expect(users).toBeInstanceOf(Array);
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
      describe("/api/articles/1", () => {
        test("should return status 200 and an article object", () => {
          return request(app)
            .get("/api/articles/1")
            .expect(200)
            .then(({ body: article }) => {
              expect(article).toEqual({
                article_id: 1,
                title: "Living in the shadow of a great man",
                topic: "mitch",
                author: "butter_bridge",
                body: "I find this existence challenging",
                created_at: "2020-07-09T20:11:00.000Z",
                votes: 100,
              });
              expect(Object.keys(article)).toEqual([
                "article_id",
                "title",
                "topic",
                "author",
                "body",
                "created_at",
                "votes",
              ]);
            });
        });
      });
    });
  });
});
