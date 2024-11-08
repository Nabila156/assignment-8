import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import GadgetDetails from './components/GadgetDetails/GadgetDetails';
import Dashboard from './components/Dashboard/Dashboard';
import Discount from './components/Discount/Discount';
import CartGadgets from './components/CartGadgets/CartGadgets';
import WishlistGadgets from './components/WishlistGAdgets/WishlistGadgets';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/gadgetCategories.json')
      },
      {
        path: '/gadgets/:productId',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/discount',
        element: <Discount></Discount>
      },
      {
        path: '/dashboard/cart',
        element: <CartGadgets></CartGadgets>,
        loader: () => fetch('/gadgets.json')
      },
      {
        path: '/dashboard/wishlist',
        element: <WishlistGadgets></WishlistGadgets>,
        loader: () => fetch('/gadgets.json')
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
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
