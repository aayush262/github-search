import { configureStore } from "@reduxjs/toolkit";

import repoSlice from "./repo-slice";

const store = configureStore({
  reducer: { repo: repoSlice.reducer },
});

export default store;
