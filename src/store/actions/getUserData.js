import { GET_USER_DATA } from "../actions/actionTypes";

export const submitRequest = request => {
  return {
    type: GET_USER_DATA,
    request: request
  };
};
