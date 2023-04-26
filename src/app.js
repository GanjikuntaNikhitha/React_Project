import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"
import About from "./components/About";
import Error from "./components/Error";
import Cart from "./components/cart";
import Contacts from "./components/Contacts";
import RestaurntMent from "./components/RestaurentMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        errorElement : <Error/>,
        children:[
            {
                path:'/',
                element: <Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/contacts',
                element: <Contacts />
            },
            {
                path:'/cart',
                element: <Cart />
            },
            {
                path:'/restaurents/:id',
                element: <RestaurntMent/>
            }
        ],
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
