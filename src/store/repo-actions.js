import { repoActions } from "./repo-slice";
import github from "../api/github";

//fetching repositories
export const fetchRepos = (query, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { data } = await github.get(
        `/search/repositories?q=${query}&per_page=25&page=${page}`
      );
      return data;
    };
    try {
      const repoLists = await fetchData();
      dispatch(
        repoActions.replaceRepos({
          items: repoLists.items,
          total: repoLists.total_count,
        })
      );
    } catch {}
  };
};
