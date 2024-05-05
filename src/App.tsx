import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Details } from "./pages/Details";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/details",
        element: <Details />
      }
    ]
  }
])