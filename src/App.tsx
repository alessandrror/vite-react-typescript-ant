import { Navigate } from "react-router"
import useAuthenticated from "./hooks/useAuthenticated"
import Layout from "./layouts/MainLayout"

function App() {

  const isAuthenticated = useAuthenticated()

  return (
    <>
      { isAuthenticated ?
        (
          <Layout />
        ) : (
          <Navigate to={'/login'} />
        )
      }
    </>
  )
}

export default App
