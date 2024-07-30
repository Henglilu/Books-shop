import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Logout from "../components/Logout";

const router = createBrowserRouter([
  // frontend
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><DashBoard/> </PrivateRoute>
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBooks/> // need to use outlet in dashboardlayout because the url is not similar with app.jsx and this is th child so it will not render will render only parent
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks/> 
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks/> ,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  }, {
    path: "sign-up",
    element: <Signup/>
  },{
    path: "login",
    element: <Login/>
  },{
    path: "/logout",
    element: <Logout/>
  }

]);

export default router;
