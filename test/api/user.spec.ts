import { User } from "../../src/api/user";

describe("User", function () {
  test("should be batman", function () {
    const user = new User("batman");
    expect(user.name).toEqual("batman");
  });
});
