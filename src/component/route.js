import { createBrowserRouter } from "react-router-dom";
import Blog from "./Blog";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import QuizQsn from "./QuizQsn";
import Root from "./Root";
import Statistics from "./Statistics";

export const router=createBrowserRouter([
    {path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/>,
        children:[
        {
            path:'/',
            element:<Home/>,
             loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
            path:'home',
            element:<Home/>,
            loader:async () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
            path:'home/:homeId',
            loader:async({params})=>{
                return fetch(` https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
            },
            element:<QuizQsn/>
        },
        {
            path: 'statistics',
            loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element:<Statistics/>
        },
        {
            path:'blog',
            element:<Blog/>
        },
    ]
}
 ])