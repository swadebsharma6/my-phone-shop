import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Favorites from "../Pages/Favorites/Favorites";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";


const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
           {
            path: '/',
            element: <HomePage></HomePage>
           },
           {
            path: '/favorites',
            element: <Favorites></Favorites>
           },
           {
            path: '/contact',
            element: <Contact></Contact>
           },
           {
            path: '/login',
            element: <Login></Login>
           }

        ]
    }
])

export default myRoute;