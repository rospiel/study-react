import { configureStore } from "@reduxjs/toolkit";
import { editorReducer } from "./Editor.store";
import { PostsReducer } from "./Posts.store";

const store = configureStore({
  reducer: {
    editor: editorReducer,
    posts: PostsReducer
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;