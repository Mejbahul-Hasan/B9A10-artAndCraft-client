import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPager/RegisterPage";
import AllArtItems from "../pages/AllArt&Craft/AllArtItems";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyCraftItem from "../pages/MyCraftItem/MyCraftItem";
import PrivateRoute from "./PrivateRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
              loader: ()=> fetch('http://localhost:5000/items')
            },
            {
              path: "/login",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <RegisterPage />,
            },
            {
              path: "/all-items",
              element: <AllArtItems />,
              loader: ()=> fetch('http://localhost:5000/items')
            },
            {
              path: "/add-item",
              element: <PrivateRoute><AddCraftItem /></PrivateRoute>,
            },
            {
              path: "/my-item",
              element: <PrivateRoute><MyCraftItem /></PrivateRoute>,
              loader: ({params})=> fetch(`http://localhost:5000/items-email/${params.email}`)
            },
            {
              path: "/view-details/:id",
              element: <PrivateRoute><ViewDetails /></PrivateRoute>,
              loader: ({params})=> fetch(`http://localhost:5000/items/${params.id}`)
            },
          ],
    },
]);

export default router;