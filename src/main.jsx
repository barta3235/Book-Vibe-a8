import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './components/root/Root.jsx'
import Listedbooks from './components/listedbooks/Listedbooks.jsx';
import Pagestoread from './components/pagestoread/Pagestoread.jsx';
import DetailBook from './components/detailbook/DetailBook.jsx';
import ReadInListed from './components/readInListed/ReadInListed.jsx';
import WishListInListed from './components/wishListInListed/WishListInListed.jsx';

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
        element: <Listedbooks></Listedbooks>,
        children:[
          {
            index:true,
            element: <ReadInListed></ReadInListed>,
            loader:()=> fetch('../public/book.json'),
          },
          {
            path:'wishlist',
            element: <WishListInListed></WishListInListed>,
          }
        ]
      },
      {
        path:'/pagestoread',
        element: <Pagestoread></Pagestoread>
      },
      {
        path:'/bookdetail/:id',
        element: <DetailBook></DetailBook>,
        loader:({params})=> fetch('../public/book.json'),
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
