import _default from "eslint-plugin-react-refresh";
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
import { fetchRealNews } from "../Services/newsService";

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
                loader: ({params}) => fetchRealNews(params.id),
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
        loader: () => fetchRealNews('0'), // Fetch top stories to find the specific one
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h2>error 404</h2>
    }
])

export default router;