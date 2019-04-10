import { createStore, combineReducers } from "redux";

import requestsReducer from "./reducers/requests";

const rootReducer = combineReducers({
  request: requestsReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
