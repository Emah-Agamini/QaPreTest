const request = require("supertest");
const baseUrl = "https://qa-test-9di7.onrender.com";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxY2YxOTAxLTU0MDItNDQzMS05ZTdkLWRiYmU3YjZlN2I1YSIsInVzZXJuYW1lIjoiSm9ubmkiLCJpYXQiOjE3MzM3MDEzMzN9.YJntj5yd8U5Au5e20ysMyHKNS-bJXeIhlyErwWKW0q8";

describe("User Management API Tests", () => {
  test("Should create a new user successfully", async () => {
    const response = await request(baseUrl)
      .post("/auth/signup") 
      .send({
        username: "uniqueUser",
        password: "SecurePass123!",
        email: "uniqueUser@example.com",
      });

    expect(response.status).toBe(201); // Success
    expect(response.body).toHaveProperty("message", "Signup successful");
  });

  test("Should fetch the user profile successfully", async () => {
    const response = await request(baseUrl)
      .get("/users/profile") 
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200); // Success
    expect(response.body).toHaveProperty("username", "Jonni"); // Verify user data
  });
});
