import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

interface ResultState {
  result: any
}

const initialState: ResultState = {
  result: {}
}

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult(state, action: PayloadAction<any>){
        state.result = action.payload
    }
  }
})

export const { 
    setResult
} = resultSlice.actions

export default resultSlice.reducer