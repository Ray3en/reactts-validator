import { combineReducers, configureStore } from "@reduxjs/toolkit";
import resultSlice from "./reducers/resultReducer";


const rootReducer = combineReducers({
    result: resultSlice
})


export const store = configureStore({
    reducer: rootReducer
  })
  
  export type AppStore = typeof store
  export type RootState = ReturnType<AppStore['getState']>
  export type AppDispatch = AppStore['dispatch']