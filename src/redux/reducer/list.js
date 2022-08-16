const initialState = {
  pokes: [],
};

function pokesReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case 'GET_POKE':
      return {
        ...state,
        pokes: payload,
      };
    default:
      return state;
  }
}

export default pokesReducer;
