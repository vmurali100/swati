const defaultState = [];
export default function rootReducer(state = defaultState, action) {
  console.log(action);

  switch (action.type) {
    case "CREATE_USER":
      var allUsers = [...state];
      allUsers.push(action.payLoad);
      return allUsers;

    case "DELETE_USER":
      var allUsers = [...state];
      allUsers.splice(action.payLoad, 1);
      return allUsers;

    case "UPDATE_USER":
      var allUsers = [...state];
      allUsers[action.payLoad.index] = action.payLoad.obj;
      return allUsers;

    default:
      return state;
  }
}
