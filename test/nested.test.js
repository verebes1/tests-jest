import * as nested from "../nested";
let storeUserDataSpy = jest.spyOn(nested, "setUserData");

describe("Get user data calls child method", () => {
  it("should call the child method", async () => {
    nested.getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(1);
  });
});
