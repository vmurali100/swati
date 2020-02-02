export function addUser() {
  return {};
}

export function deleteUser() {
  return {};
}

export function updateUser() {
  return {};
}

export function getLatestUsers(users) {
  const action = {
    type: "GET_LATEST",
    payLoad: users
  };
  return action;
}
