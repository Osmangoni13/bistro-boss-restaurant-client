import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2 className="text-2xl text-blue-700">Page Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "menu",
                element: <Menu></Menu>,
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            }
        ]
    },

]);
export default router;