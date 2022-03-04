const request = require("supertest");
const db = require("../db/connection");
const data = require("../db/data/test-data");
const seed = require("../db/seeds/seed");
const app = require("../app");

afterAll(() => db.end());
beforeEach(() => seed(data));

describe("BE NEWS API", () => {
  describe("GET", () => {
    describe("/api/topics", () => {
      test("should return a array of object with properties slug and description", () => {
        return request(app)
          .get("/api/topics")
          .expect(200)
          .then((res) => {
            console.log(res);
          });
      });
    });
  });
});
