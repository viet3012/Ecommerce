import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import DetailPage from "./pages/Detail";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RootLayout from "./pages/Root";
import ProductsShop from "./components/shop/ProductsShop";
import CheckoutPage from "./pages/Checkout";
import RegisterPage from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      { path: "/cart", element: <CartPage /> },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
        children: [{ path: "category/:category", element: <ProductsShop /> }],
      },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
