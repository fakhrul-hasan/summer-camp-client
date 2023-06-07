import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/dashboard',
          element: <DashboardHome></DashboardHome>
        }
      ]
    }
  ]);
  export default router;