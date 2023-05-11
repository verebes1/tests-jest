import { getUserData, exportedForTesting } from "../nested";

// const { setUserData } = exportedForTesting;

let storeUserDataSpy = jest.spyOn(exportedForTesting, "setUserData");

describe("Get user data calls child method", () => {
  it("should call the child method", async () => {
    getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(1);
  });
});
