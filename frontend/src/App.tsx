import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { BlogPost } from "./pages/BlogPost";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/blog/:id",
    element: <Blog />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogpost",
    element: <BlogPost />,
  },
]);

const App = () => {
  return <RouterProvider router={Approuter}></RouterProvider>;
};

export default App;
