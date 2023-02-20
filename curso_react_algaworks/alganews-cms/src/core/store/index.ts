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

export function createAppStore() {
  return configureStore({
    reducer: {
      editor: editorReducer,
      posts: PostsReducer
    },
    middleware: function (getDefaultMiddlewares) {
      return getDefaultMiddlewares().concat(observeActions);
    }
  });
}

const store = createAppStore();

export default store;
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;