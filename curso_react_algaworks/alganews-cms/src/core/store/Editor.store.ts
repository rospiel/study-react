import { createAsyncThunk, createReducer, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { User, UserService } from "rospiel-react_alganews-sdk";

export const fetchAllEditors = createAsyncThunk("editor/fetchAllEditors", async function () {
  return UserService.getAllEditors();
});

interface EditorStoreState {
  fetching: boolean
  editorList: User.EditorSummary[]
}

const initialState = {} as EditorStoreState;
initialState.fetching = false;
initialState.editorList = [];

export const editorReducer = createReducer(initialState, (builder) => {
  const pendingActions = isPending(fetchAllEditors);
  const fulfilledActions = isFulfilled(fetchAllEditors);
  const rejectedActions = isRejected(fetchAllEditors);
  
  builder.addCase(fetchAllEditors.fulfilled, (state, action) => {
    state.editorList = action.payload;
  }).addMatcher(pendingActions, (state) => {
    state.fetching = true;
  }).addMatcher(fulfilledActions, (state) => {
    state.fetching = false;
  }).addMatcher(rejectedActions, (state) => {
    state.fetching = false;
  })
})




