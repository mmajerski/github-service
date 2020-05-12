import { GET_VISITED } from "./../actions/types";

const initialState = {
  timesVisited: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_VISITED:
      return {
        ...state,
        timesVisited: parseInt(payload)
      };
    default:
      return state;
  }
}
