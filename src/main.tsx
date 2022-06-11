import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./route/route";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
