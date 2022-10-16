import { combineReducers } from "redux-immutable";

import { reducer as loginReducer } from "../pages/login/store";
import { reducer as mainRuducer } from "../pages/main/store";

// 对拆分的 reducer 进行合并
const cReducer = combineReducers({
  login: loginReducer,
  main: mainRuducer,
});

export default cReducer;
