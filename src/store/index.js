import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// 用于支持浏览器的调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 第二个参数用于增强
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
