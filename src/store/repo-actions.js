import { repoActions } from "./repo-slice";
import github from "../api/github";

//fetching list of repositories
export const fetchRepos = (query, page, sortValue = "default") => {
  return async (dispatch) => {
    const fetchData = async () => {
      const { data } = await github.get(
        `/search/repositories?q=${query}&sort=${sortValue}&per_page=25&page=${page}&order={desc}`
      );
      return data;
    };
    try {
      const repoLists = await fetchData();
      dispatch(
        repoActions.replaceRepos({
          items: repoLists.items,
          total: repoLists.total_count,
          currentPage: page,
          sortValue,
          order: "desc",
        })
      );
    } catch {}
  };
};

//fetching single repository
export const fetchRepoItem = (owner, name) => {
  return async (dispatch) => {
    try {
      const { data } = await github.get(`/repos/${owner}/${name}`);
      dispatch(repoActions.selectRepo(data));
    } catch {}
  };
};

//fetch repository readme with base64 decoding
export const fetchContent = (owner, name) => {
  return async (dispatch) => {
    try {
      const { data } = await github.get(`/repos/${owner}/${name}/readme`);
      const decoded = window.atob(data.content);
      dispatch(repoActions.replaceContent(decoded));
    } catch {}
  };
};
