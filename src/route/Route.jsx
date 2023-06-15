import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../layout/Main";
import Instructors from "../pages/instructors/Instructors";
import Class from "../pages/class/Class";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/register/SignUp";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/dashboard/myCart/MyCart";
import AllUsers from "../pages/dashboard/allUsers/AllUsers";
import AddClass from "../pages/dashboard/addClass/AddClass";
import MngClass from "../pages/dashboard/mngClass/mngClass";
import MyClass from "../pages/dashboard/myCart/myClass/MyClass";
import Payment from "../pages/dashboard/payment/Payment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<PageNotFound/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/instructors",
            element:<Instructors/>
        },
        {
            path:"/class",
            element:<Class/>
        },
        {
            path:"/sign-in",
            element:<LogIn/>
        },
        {
            path:"/sign-up",
            element:<SignUp/>
        },
        
       
      ], 
    },
    {
        path: "/dashboard",
        element:<PrivetRoute><Dashboard/></PrivetRoute>,
        children:[
            {
                path: 'mycart', 
                element: <MyCart/>
            },
            {
                path: 'allusers',
                element: <AllUsers/>
            },
            {
                path:'addclass',
                element:<AddClass/>
            },
            {
                path:"manageclass",
                element:<MngClass/>
            },
            {
                path:"myclass",
                element:<MyClass/>
            },
            {
                path:"payment",
                element:<Payment/>
            }
        ]
    }
  ]);
  export default router;