const request = require("supertest");
const app = require("../app");

describe("App endpoints", () => {
  test("GET / should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  test("GET /health should return UP", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body.health).toBe("UP");
  });
});
