import __RewireAPI__, { getUserData } from "../nested";
let setUserDataSpy = jest.fn();

describe("Get user data calls child method", () => {
  it("should call the child method", async () => {
    __RewireAPI__.__Rewire__("setUserData", setUserDataSpy);
    getUserData();
    expect(setUserDataSpy).toHaveBeenCalledTimes(1);
    getUserData();
    expect(setUserDataSpy).toHaveBeenCalledTimes(2);
    getUserData();
    expect(setUserDataSpy).toHaveBeenCalledTimes(3);
  });
});
