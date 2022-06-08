import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const navigate = useNavigate();
  return (query, page) => {
    if (!page) page = 1;
    navigate({
      pathname: "/results",
      search: `?search_query=${query}&page=${page}`,
    });
  };
};
