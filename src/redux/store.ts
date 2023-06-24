import {configureStore} from "@reduxjs/toolkit";
import {recipeApi} from "./api/api";
import {useDispatch} from "react-redux";
import formSliceReducer from "./slices/formSlice";

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
    form: formSliceReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(recipeApi.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch