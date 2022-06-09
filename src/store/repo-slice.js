import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  repos: [],
  totalRepos: 0,
  sortBy: "default",
  orderBy: "none",
  currentPage: 1,
  selectedRepo: {},
  content: null,
  showLoading: false,
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
    selectRepo(state, action) {
      state.selectedRepo = action.payload;
    },
    replaceContent(state, action) {
      state.content = action.payload;
    },
    changeLoadingState(state) {
      state.showLoading = !state.showLoading;
    },
  },
});

export const repoActions = repoSlice.actions;

export default repoSlice;
