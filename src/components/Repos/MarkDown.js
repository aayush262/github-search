import React from "react";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

const MarkDown = () => {
  const { content } = useSelector((state) => state.repo);
  return (
    <div className="border-2 border-gray-200 rounded-md px-4 py-2 mt-2 bg-white">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkDown;
