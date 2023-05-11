export function getUserData() {
  console.log("CALLING API");
  const user = {
    name: "user",
  };
  setUserData(user);
}

export function setUserData(user) {
  console.log("Setting user data");
}
