import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';
import GadgetDetails from './GadgetDetails/GadgetDetails.jsx';
import Statistics from './Statistics/Statistics.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WishlistGadgets from './WishlistGadgets/WishlistGadgets.jsx';
import CartGadgets from './CartGadgets/CartGadgets.jsx';
import Discount from './Discount/Discount.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('/gadgetCategories.json')
      },
      {
        path: '/gadgets/:productId',
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: '/discount',
        element: <Discount></Discount>
      },
      {
        path: '/dashboard/cart',
        element: <CartGadgets></CartGadgets>,
        loader: ()=> fetch('/gadgets.json')
      },
      {
        path: '/dashboard/wishlist',
        element: <WishlistGadgets></WishlistGadgets>,
        loader: ()=> fetch('/gadgets.json')
      },      
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
  </StrictMode>,
)
