import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const navigate = useNavigate();
  return (query) => {
    navigate(`/results/?search_query=${query}`);
  };
};
