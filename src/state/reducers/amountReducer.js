const reducer = (state = 10000, action) => {
  if (action.type == "increase") {
    return state + action.payload;
  } else if (action.type == "decrease") {
    return state - action.payload;
  } else {
    return state;
  }
};

export default reducer;
