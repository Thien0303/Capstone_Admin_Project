import { configureStore } from '@reduxjs/toolkit'
import weatherSlice from './Reducers/ExpertSlice/weatherSlice'
const store = configureStore({
    reducer: {
      weather : weatherSlice,
    },
    
} 
)

export default store
