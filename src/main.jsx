import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/root/Root.jsx'
import Listedbooks from './components/listedbooks/Listedbooks.jsx';
import Pagestoread from './components/pagestoread/Pagestoread.jsx';
import DetailBook from './components/detailbook/DetailBook.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/listedbooks',
        element: <Listedbooks></Listedbooks>
      },
      {
        path:'/pagestoread',
        element: <Pagestoread></Pagestoread>
      },
      {
        path:'/bookdetail',
        element: <DetailBook></DetailBook>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
