import { setUserData } from "./utils";

export function getUserData() {
  console.log("CALLING API");
  const user = {
    name: "user",
  };
  setUserData(user);
}
