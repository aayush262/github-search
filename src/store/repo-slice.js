import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  repos: [],
  totalRepos: 0,
  sortBy: "default",
  orderBy: "none",
  currentPage: 1,
};

const repoSlice = createSlice({
  name: "repo",
  initialState: INITIAL_STATE,
  reducers: {
    replaceRepos(state, action) {
      const { items, total, currentPage, sortValue, order } = action.payload;
      state.repos = items;
      state.totalRepos = total;
      state.currentPage = currentPage;
      state.sortBy = sortValue;
      state.orderBy = order;
    },
  },
});

export const repoActions = repoSlice.actions;

export default repoSlice;
