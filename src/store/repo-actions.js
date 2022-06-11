import { repoActions } from "./repo-slice";
import { base64 } from "../utils/base64";
import github from "../api/github";

const clientSecret = process.env.REACT_APP_CLIENT_SECRET || "";
const clientId = process.env.REACT_APP_CLIENT_ID || "";

//fetching list of repositories
export const fetchRepos = (query, page, sortValue = "default") => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(repoActions.changeLoadingState());
      const { data } = await github.get(
        `/search/repositories?q=${query}&sort=${sortValue}&per_page=25&page=${page}&client_id=${clientId}&client_secret=${clientSecret}`
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
    } catch {
    } finally {
      dispatch(repoActions.changeLoadingState());
    }
  };
};

//fetching single repository
export const fetchRepoItem = (owner, name) => {
  return async (dispatch) => {
    try {
      const { data } = await github.get(
        `/repos/${owner}/${name}?client_id=${clientId}&client_secret=${clientSecret}`
      );
      dispatch(repoActions.selectRepo(data));
    } catch {}
  };
};

//fetch repository readme with base64 decoding
export const fetchContent = (owner, name) => {
  return async (dispatch) => {
    try {
      const { data } = await github.get(
        `/repos/${owner}/${name}/readme?&client_id=${clientId}&client_secret=${clientSecret}`
      );
      const decoded = base64.decoder(data.content);
      dispatch(repoActions.replaceContent(decoded));
    } catch {}
  };
};
