import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
import AddClass from "../Pages/AddClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";

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
          element: <InstructorHome></InstructorHome>
        },
        {
          path: '/dashboard/addClass',
          element: <AddClass></AddClass>
        },
        {
          path: '/dashboard/manageClasses',
          element: <ManageClasses></ManageClasses>
        },
        {
          path: '/dashboard/manageUsers',
          element: <ManageUsers></ManageUsers>
        }
      ]
    }
  ]);
  export default router;