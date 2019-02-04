import { createStore, combineReducers } from "redux";

import messagesReducer from "./reducers/messages";

const rootReducer = combineReducers({
  message: messagesReducer
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
