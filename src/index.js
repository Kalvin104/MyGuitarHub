import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";

import AddNewGuitar from "./components/AddNewGuitar";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import { Outlet, Link } from "react-router-dom";

import Layout from "./components/pages/Layout.js";
import Header from "./components/Header.js";

import Collection from "./components/Collection";
import Compare_page from "./components/compare/Compare_page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  }
]);

const newrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />}></Route>
      <Route path="newguitar" element={<AddNewGuitar />}></Route>
      <Route path="collection" element={<Collection />}></Route>
      <Route path="compare" element={<Compare_page />}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={newrouter} />
  </React.StrictMode>
);
