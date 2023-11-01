import { createBrowserRouter, redirect } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import SignIn from "../pages/login/signin";
import NotFound from "../pages/notFoundPage";
import Product from "../pages/product";
import SignUp from "../pages/signup/signup";
import { getIsLoggedin, logout } from "../redux/actions/authActions";
import Checkout from "../pages/buynow/checkOut/CheckOut";

const ROUTES = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/signin",
        element: <SignIn />,
        loader:()=>{
            const isLoggedIn = getIsLoggedin();
            if(isLoggedIn){
                return redirect("/");
            }
            return null;
           
        },
    },
    {
        path:"/signup",
        element: <SignUp />,
        loader:()=>{
            const isLoggedIn = getIsLoggedin();
            if(isLoggedIn){
                return redirect("/");
            }
            return null;
           
        },
    },
    {
        path:"/cart",
        element: <Cart/>,
        loader:()=>{
            const isLoggedIn = getIsLoggedin();
            
            if(!isLoggedIn){
                return redirect("/signin");
            }
            return null;
           
        },
    },
    {
        path:"/product/:id",
        element: <Product/>,
    },
    {
        path:"/checkout/:keyId",
        element: <Checkout/>,
        loader:()=>{
            const isLoggedIn = getIsLoggedin();
            
            if(!isLoggedIn){
                return redirect("/signin");
            }
            return null;
           
        },
    },
    {
        path:"*",
        element: <NotFound/>,
    },
]);

export default ROUTES