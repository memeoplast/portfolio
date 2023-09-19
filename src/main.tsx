import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./Routes/Home.tsx";
import { Contact } from "./Components/Contact/Contact.tsx";
// import ErrorPage from './R^outes/error-page';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { element } from "three/examples/jsm/nodes/Nodes.js";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
