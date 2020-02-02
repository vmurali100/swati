function rootReduder(defaultState = { users: [] }, action) {
  switch (action.type) {
    case "GET_LATEST":
      var data = action.payLoad;
      return data;
    default:
      return defaultState.users;
  }
}

export default rootReduder;
