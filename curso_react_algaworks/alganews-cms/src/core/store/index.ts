import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./Editor.store";

const store = configureStore({
  reducer: {
    editor: editorReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;