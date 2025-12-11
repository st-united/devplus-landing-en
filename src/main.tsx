import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./Page/HomePage";
import Home from "./Page/Home";
import WhatWeDo from "./Page/WhatWeDo";
import WhoWeAre from "./Page/WhoWeAre";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="whoweare" element={<WhoWeAre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
