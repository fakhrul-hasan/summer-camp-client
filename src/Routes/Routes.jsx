import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../Pages/Dashboard/MyClasses";
import StudentRoute from "./StudentRoute";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import AddClass from "../Pages/Dashboard/AddClass";
import Classes from "../Pages/Classes";
import Payment from "../Pages/Dashboard/Payment";
import Instructors from "../Pages/Instructors";
import UpdateAClass from "../Pages/Dashboard/UpdateAClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
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
        },
        {
          path: '/classes',
          element: <Classes></Classes>,
          loader: ()=>fetch('https://summer-camp-server-inky.vercel.app/classes')
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>,
          loader: ()=>fetch('https://summer-camp-server-inky.vercel.app/instructors')
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/dashboard',
          element: <DashboardHome></DashboardHome>
        },
        {
          path: 'addClass',
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: 'updateClass',
          element: <InstructorRoute><UpdateAClass></UpdateAClass></InstructorRoute>
        },
        {
          path: 'myClasses',
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: 'manageClasses',
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: 'selectedClass',
          element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
        },
        {
          path: 'enrolledClass',
          element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>,
        },
        {
          path: 'paymentHistory',
          element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>,
        },
        {
          path: 'payment',
          element: <StudentRoute><Payment></Payment></StudentRoute>
        }
      ]
    }
  ]);
  export default router;