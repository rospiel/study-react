import { configureStore, Middleware, isPending } from "@reduxjs/toolkit";
import { editorReducer } from "./Editor.store";
import { PostsReducer } from "./Posts.store";

const observeActions: Middleware = () => (next) => (action) => {
  if (isPending(action)) {
    console.log("isRejected");
  }
  console.log(action);
  next(action);
}

const store = configureStore({
  reducer: {
    editor: editorReducer,
    posts: PostsReducer
  }, 
  middleware: function (getDefaultMiddlewares) {
    return getDefaultMiddlewares().concat(observeActions);
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;