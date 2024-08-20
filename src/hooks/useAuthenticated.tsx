import { useState, useEffect } from 'react'
import userStore from "../stores/user.store"

const useAuthenticated = () => {
  const { authenticated } = userStore.getState()
  const [isAuthenticated, setIsAuthenticated] = useState(authenticated)

  useEffect(() => {
    const { authenticated: isLogged } = userStore.getState()
    setIsAuthenticated(isLogged)
  }, [])

  return isAuthenticated
}

export default useAuthenticated
