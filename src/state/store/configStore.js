import { createStore, combineReducers } from "redux";
import { cardReduser } from "../reducer/cardReduser";
import { loanReducer } from "../reducer/loanReducer";


export const configStore = () => {
  const store = createStore(
    combineReducers({ loanReducer ,cardReduser }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
