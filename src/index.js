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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={newrouter} />
  </React.StrictMode>
);
