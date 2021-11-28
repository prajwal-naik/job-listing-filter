import { configureStore  } from "@reduxjs/toolkit";
import someReducer from "./features/someSlice";

export const store = configureStore({
    reducer: {
        feature: someReducer,
    },
});