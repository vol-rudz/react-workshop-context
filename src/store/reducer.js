import {SET_DATA} from "./actionTypes";

export const initialState = {
  data: [],
};

export const dataReducer = (state, action) => {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state
  }
};
