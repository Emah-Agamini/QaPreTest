const request = require("supertest");
const baseUrl = "https://qa-test-9di7.onrender.com";

describe("Authentication API Tests", () => {
  test("Should sign up a new user successfully", async () => {
    const response = await request(baseUrl)
      .post("/auth/signup")
      .send({
        username: "newUser",
        password: "SecurePass123!",
        email: "newUser@example.com",
      });

    expect(response.status).toBe(201); // Expecting success response
    expect(response.body).toHaveProperty("message", "Signup successful"); // Customize this based on actual API response
  });

  test("Should fail login with invalid credentials", async () => {
    const response = await request(baseUrl)
      .post("/auth/login")
      .send({
        username: "wrongUser",
        password: "wrongPass",
      });

    expect(response.status).toBe(401); // Unauthorized error for invalid credentials
    expect(response.body).toHaveProperty("message", "Invalid username or password"); // Verify error message
  });

  test("Should log in successfully with valid credentials", async () => {
    const response = await request(baseUrl)
      .post("/auth/login")
      .send({
        username: "Jonni",
        password: "validPassword123", // Replace with actual password
      });

    expect(response.status).toBe(200); // Success
    expect(response.body).toHaveProperty("token"); // Verify token is returned
  });
});
