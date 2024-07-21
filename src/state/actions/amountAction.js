// HERE SHOULD BE 2 ACTIONS FUNCTIONS
export const minusActionFunction = (amount) => {
  return (dispatch) => {
    return dispatch({ type: "decrease", payload: amount });
  };
};

export const addActionFunction = (amount) => {
  return (dispatch) => {
    return dispatch({ type: "increase", payload: amount });
  };
};
