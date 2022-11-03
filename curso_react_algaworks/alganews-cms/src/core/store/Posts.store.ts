import { createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { Post, PostService } from "rospiel-react_alganews-sdk";

export const fetchAllPosts = createAsyncThunk("posts/fetchAllPosts", async function getAllPosts(search: Post.Query) {
  return PostService.getAllPosts(search);
});

interface PostsStoreState {
  fetching: boolean
  posts: Post.Paginated
  query: Post.Query
}

const initialState = {} as PostsStoreState;
initialState.fetching = false;

export const PostsReducer = createReducer(initialState, (builder) => {
  const pendingActions = isPending(fetchAllPosts);
  const fulfilledActions = isFulfilled(fetchAllPosts);
  const rejectedActions = isRejected(fetchAllPosts);

  builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
    state.posts = action.payload;
  }).addMatcher(pendingActions, (state) => {
    state.fetching = true;
  }).addMatcher(fulfilledActions, (state) => {
    state.fetching = false;
  }).addMatcher(rejectedActions, (state) => {
    state.fetching = false;
  })
})