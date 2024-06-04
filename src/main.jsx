import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Supdashh.jsx'
import Doctor_Details from './components/pages/Doctor_Details.jsx'
import Employee_Details from './components/pages/Employee_Details.jsx'
import Pathology from './components/pages/Pathology.jsx'
import Med_Store from './components/pages/Med_Store.jsx'
import Dispensary from './components/pages/Dispensary.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:  [
      {
        path: "/",
        element :<Dashboard/>
      },
      {
        path: "/Doctor_Details",
        element :<Doctor_Details/>
      },
      {
        path: "/Employee_Details",
        element :<Employee_Details/>
      },
      {
        path: "/Pathology",
        element :<Pathology/>
      },
      {
        path: "/Med_Store",
        element :<Med_Store/>
      },
      {
        path: "/Dispensary",
        element :<Dispensary/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
