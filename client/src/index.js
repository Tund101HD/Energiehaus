import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './app.css';
import Dashboard from "./pages/Dashboard";
import Database from "./pages/Database";
import Weatherstation from "./pages/Weatherstation";
import Sensors from "./pages/Sensors";
import Impressum from "./pages/Impressum";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "/database",
        element: <Database/>,
    },
    {
        path: "/weatherstation",
        element: <Weatherstation/>,
    },
    {
        path: "/sensors",
        element: <Sensors/>,
    },
    {
        path: "/impressum",
        element: <Impressum/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
