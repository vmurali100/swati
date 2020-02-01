export function addUser(user) {
  const action = {
    type: "CREATE_USER",
    payLoad: user
  };
  return action;
}

export function deleteUser(index) {
  const action = {
    type: "DELETE_USER",
    payLoad: index
  };
  return action;
}

export function updateUser(index, obj) {
  let objToUpdate = {
    index,
    obj
  };
  const action = {
    type: "UPDATE_USER",
    payLoad: objToUpdate
  };
  return action;
}
