import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
const store = configureStore({
    reducer: postReducer,
})
export default store