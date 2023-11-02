<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import AddNewGuitar from "./components/AddNewGuitar";

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
import Compare_page from "./components/compare/Compare_page";

const newrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />}></Route>
      <Route path="newguitar" element={<AddNewGuitar />}></Route>
      <Route path="guitars" element={<Collection />}></Route>
      <Route path="compare" element={<Compare_page />}></Route>
    </Route>
  )
);
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './routes/error-page';
import Contact from "./routes/contact"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { Outlet, Link } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
>>>>>>> 86d596bf76bf6365e2915806a7e837ad567f156d

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={newrouter} />
  </React.StrictMode>
);
