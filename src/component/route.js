import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Root from "./Root";

export const router=createBrowserRouter([
    {path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
        children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/home',element:<Home/>
        },
    ]
}
 ])