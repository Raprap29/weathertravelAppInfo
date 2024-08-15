import { createBrowserRouter } from "react-router-dom";
import HomePage from "./views/HomePage";
import Layouts from "./components/layouts";
import TravelersPage from "./views/Travelers";
export const router = createBrowserRouter(
    [
        {
            element: <Layouts />,
            children: [
                {
                    element: <HomePage />,
                    path: "/"
                },
                {
                    element: <TravelersPage />,
                    path: "/travelers/:city",
                },
            ]
        }
    ]
);