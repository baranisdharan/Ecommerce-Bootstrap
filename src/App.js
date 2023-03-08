import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./Components/Routers/AboutPage";
import Store from "./Store";

import Home from "./Home";
import Contact from "./Contact";
import ProductPage from "./Components/ProductPages/ProductPage";

const router = createBrowserRouter([
  { path: "/", element: <Store /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/home", element: <Home /> },
  { path: "/contact", element: <Contact /> },
  { path: "/product/:id", element: <ProductPage /> },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
