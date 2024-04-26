import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPager/Registerpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/login",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <RegisterPage />,
            },
          ],
    },
]);

export default router;