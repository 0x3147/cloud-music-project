import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'
import recommendSlice from '@/views/discover/c-views/recommend/store/recommend'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendSlice
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DisPatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DisPatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
