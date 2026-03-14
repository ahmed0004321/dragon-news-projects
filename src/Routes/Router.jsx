import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Page/Home";
import Categorynews from "../Page/Categorynews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayouts from "../Layouts/AuthLayouts";
import NewsDetails from "../Page/NewsDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'category/:id',
                element: <Categorynews></Categorynews>,
                loader: () => fetch('/news.json'),
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayouts></AuthLayouts>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: (
            <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>
        ),
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h2>error 404</h2>
    }
])

export default router;