import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./Page/HomePage";
import Home from "./Page/Home";
import WhatWeDo from "./Page/WhatWeDo";
import WhoWeAre from "./Page/WhoWeAre";
import Universities from "./Page/Universities";
import Companies from "./Page/Companies";
import AICP from "./Page/AICP";
import LMS from "./Page/LMS";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="whatwedo" element={<WhatWeDo />} />
          <Route path="whatwedo/universities" element={<Universities />} />
          <Route path="whatwedo/companies" element={<Companies />} />
          <Route path="whoweare" element={<WhoWeAre />} />
          <Route path="Products/AICP" element={<AICP />} />
          <Route path="Products/LMS" element={<LMS />} />


        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
