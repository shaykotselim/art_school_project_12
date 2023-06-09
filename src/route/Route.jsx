import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Main from "../layout/Main";
import Instructors from "../pages/instructors/Instructors";
import Class from "../pages/class/Class";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/register/SignUp";
import PageNotFound from "../pages/pageNotFound/PageNotFound";

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
       
      ]
    },
  ]);
  export default router;