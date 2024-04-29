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
import UpdatePage from "../components/UpdatePage";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
          {
            path: "/",
            element: <Home />,
            loader: ()=> fetch('https://art-and-craft-server-eight.vercel.app/items')
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
            loader: ()=> fetch('https://art-and-craft-server-eight.vercel.app/items')
          },
          {
            path: "/add-item",
            element: <PrivateRoute><AddCraftItem /></PrivateRoute>,
          },
          {
            path: "/my-item",
            element: <PrivateRoute><MyCraftItem /></PrivateRoute>,
          },
          {
            path: "/update/:id",
            element: <PrivateRoute><UpdatePage /></PrivateRoute>,
            loader: ({params})=> fetch(`https://art-and-craft-server-eight.vercel.app/items/${params.id}`)
          },
          {
            path: "/view-details/:id",
            element: <PrivateRoute><ViewDetails /></PrivateRoute>,
            loader: ({params})=> fetch(`https://art-and-craft-server-eight.vercel.app/items/${params.id}`)
          },
        ],
  },
]);

export default router;