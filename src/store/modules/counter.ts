import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  name: string[]
}

const initialState: IState = {
  count: 100,
  message: 'hello redux',
  address: '西安',
  height: 1.8,
  direction: 'left',
  name: ['张三', '李四', '王五']
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
