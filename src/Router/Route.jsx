import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Favorites from "../Pages/Favorites/Favorites";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";


const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
           {
            path: '/',
            element: <HomePage></HomePage>,
            loader: ()=> fetch('/public/phones.json')
           },
           {
            path: '/phones/:id',
            element: <PhoneDetails></PhoneDetails>,
            loader: ()=> fetch('/phones.json')
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