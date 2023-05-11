export function getUserData() {
  console.log("CALLING API");
  const user = {
    name: "user",
  };
  setUserData(user);
}

function setUserData(user) {
  console.log("Setting user data");
}
