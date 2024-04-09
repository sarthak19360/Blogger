import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";

const Approuter = createBrowserRouter([
  {
    path: "/signup",
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
]);

const App = () => {
  return <RouterProvider router={Approuter}></RouterProvider>;
};

export default App;
