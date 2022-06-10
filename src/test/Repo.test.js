import { render } from "@testing-library/react";
import RepoLists from "./../Components/Repos/RepoLists";
import { Provider } from "react-redux";
import store from "./../store";

const ReduxWrapper = ({ children }) => {
  <Provider store={store}>{children}</Provider>;
};

describe("Repo Test", () => {
  test("renders repositories if succeed", async () => {
    render(<RepoLists />, { wrapper: ReduxWrapper });
  });
});
