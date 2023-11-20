import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cakeReducer from './slices/cake/cakeSlice';
import sliceOfCakeReducer from './slices/sliceOfCake/sliceOfCakeSlice';

 
export const store = configureStore({
    reducer: {
        cake: cakeReducer,
        sliceOfCake: sliceOfCakeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;