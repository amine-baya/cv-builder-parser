import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./settingsSlice";
import resumeSlice from "./resumeSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    resume: resumeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;