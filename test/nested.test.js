import { getUserData } from "../nested";
import * as utils from "../utils";

let storeUserDataSpy = jest.spyOn(utils, "setUserData");

describe("Get user data calls child method", () => {
  it("should call the child method", () => {
    getUserData();
    expect(storeUserDataSpy).toHaveBeenCalledTimes(1);
  });
});
