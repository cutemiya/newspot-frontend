import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/base/index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./lib/router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
