import { USER_TYPES } from "./user.type";

export const setCurrentUser = (user) => ({
  type: USER_TYPES.SET_CURRENT_USER,
  payload: { currentUser: user },
});
