const successReducer = (state = false, action) => {
  switch (action.type) {
    case "Success":
      return state = true;
    case "Error":
      return state = false;
    default:
      return state
  }
}

export default successReducer;