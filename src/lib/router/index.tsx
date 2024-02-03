import {createBrowserRouter} from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Likes from "../../pages/Likes";

export const router = createBrowserRouter([
    {
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "likes",
                element: <Likes />,
            },
        ],
    },
]);