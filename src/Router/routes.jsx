import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Contact from "../Components/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/',
                element: <Home />
            }
            ,
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
])
export default router;