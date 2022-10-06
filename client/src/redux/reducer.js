import { USER } from "./actions";

const initialState = {
  user: [],

};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
   
    case USER:
      return {
        ...state,
        user: actions.payload,
      };
    default:
      return state;
  }
}
