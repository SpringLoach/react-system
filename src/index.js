import React from "react";
// import ReactDOM from "react-dom/client";
import ReactDOM from "react-dom";
import "@/assets/css/common.css";

import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<App />);
// 降级为 react17
ReactDOM.render(<App />, document.getElementById("root"));
