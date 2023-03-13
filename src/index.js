import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './assets/css/index.css';
import Homepage from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <Homepage />
    ),
  },
  {
    path:"/about",
    element:(
      <About />
    )
  },
  {
    path:"/contact",
    element:(
      <Contact />
    )
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
