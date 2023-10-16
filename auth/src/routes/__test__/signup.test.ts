import request from "supertest";
import { app } from "../../app";

it("return a 201 on successful signup", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "tes@test.com",
      passwword: "password",
    })
    .expect(201);
});
