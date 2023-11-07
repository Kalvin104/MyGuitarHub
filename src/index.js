import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AddNewGuitar from "./components/AddNewGuitar";

import Compare_page from "./components/compare/Compare_page";
import CompareMenuHeader from "./components/compare/CompareMenuHeader";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import "./server";

import Layout from "./components/pages/Layout.js";
import Collection from "./components/Collection";
import CompareAll from "./components/compare/CompareAll";
import CompareSaved from "./components/compare/CompareSaved";

const newrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />}></Route>
      <Route path="newguitar" element={<AddNewGuitar />}></Route>
      <Route path="guitars" element={<Collection />}></Route>
      <Route path="compare" element={<CompareMenuHeader/>}>
        <Route index element={<CompareAll />}></Route>
        <Route path='saved' element={<CompareSaved />}></Route>
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={newrouter} />
  </React.StrictMode>
);
