import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    authenticated: false
  },
  reducers: {
    login: state => {
      state.authenticated = true
    },
    logout: state => {
      state.authenticated = false
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => console.log(store.getState()))

export const { login, logout } = counterSlice.actions

export default store
