const request = require("supertest");
const baseUrl = "https://qa-test-9di7.onrender.com";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxY2YxOTAxLTU0MDItNDQzMS05ZTdkLWRiYmU3YjZlN2I1YSIsInVzZXJuYW1lIjoiSm9ubmkiLCJpYXQiOjE3MzM3MDEzMzN9.YJntj5yd8U5Au5e20ysMyHKNS-bJXeIhlyErwWKW0q8";

describe("Item Management API Tests", () => {
  test("Should fetch all items successfully", async () => {
    const response = await request(baseUrl)
      .get("/items") 
      .set("Authorization", `Bearer ${token}`); // Using provided token

    expect(response.status).toBe(200); // Success
    expect(Array.isArray(response.body)).toBe(true); // Verify response is an array
  });

  test("Should create a new item successfully", async () => {
    const response = await request(baseUrl)
      .post("/items") // Replace with the correct endpoint
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "New Item", price: 100 }); 

    expect(response.status).toBe(201); // Success
    expect(response.body).toHaveProperty("id"); // Check response contains an ID
  });
});
