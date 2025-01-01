import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2 className="text-2xl text-blue-700">Page Not Found</h2>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },

]);
export default router;