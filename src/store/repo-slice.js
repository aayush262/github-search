import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  repos: [],
  totalRepos: 0,
};

const repoSlice = createSlice({
  name: "repo",
  initialState: INITIAL_STATE,
  reducers: {
    replaceRepos(state, action) {
      const { items, total } = action.payload;
      state.repos = items;
      state.totalRepos = total;
    },
  },
});

export const repoActions = repoSlice.actions;

export default repoSlice;
