import __RewireAPI__, { getUserData, exportedForTesting } from "../nested";
let storeUserDataSpy = jest.spyOn(exportedForTesting, "setUserData");

describe("Get user data calls child method", () => {
  it("should call the child method", async () => {
    __RewireAPI__.__Rewire__("setUserData", storeUserDataSpy);
    getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(1);
    getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(2);
  });
});
