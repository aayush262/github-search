import { screen, render } from "@testing-library/react";
import RepoLists from "./../Components/Repos/RepoLists";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const mockAppState = {
  repo: {
    repos: [
      {
        id: 1,
        full_name: "facebook/react",
        owner: {
          avatar_url: "https://avatars.githubusercontent.com/u/69631?v=4",
        },
        stargazers_count: 123,
        watchers: 123,
        forks: 123,
        description: "123",
      },
    ],
  },
};

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe("Repo Test", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it("renders repositories if succeed", async () => {
    render(<RepoLists />, { wrapper: BrowserRouter });
    const repos = await screen.findAllByRole("listitem");
    expect(repos).toHaveLength(1);
  });
});
