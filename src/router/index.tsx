import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import NotFound from "../pages/404"

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/signup',
        element: <Signup />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router
