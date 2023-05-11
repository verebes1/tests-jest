import __RewireAPI__, * as nested from "../nested";
let storeUserDataSpy = jest.spyOn(nested, "setUserData");

describe("Get user data calls child method", () => {
  it("should call the child method", async () => {
    __RewireAPI__.__Rewire__("setUserData", storeUserDataSpy);
    nested.getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(1);
  });
});
