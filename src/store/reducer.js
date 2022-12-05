import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({  // rootReducer에 counter 추가
    counter,
});

export default rootReducer;