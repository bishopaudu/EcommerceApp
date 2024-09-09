import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsScreen from './screens/ProductsScreens.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router  = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Product",
    element:<ProductsScreen/>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
