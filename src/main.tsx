import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import userStore from './stores/user.store.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={userStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
