import { USER_TYPES } from "./user.type";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.SET_CURRENT_USER: {
      return {
        ...state,
        ...payload,
      };
    }
    default: {
      return state;
    }
  }
};
