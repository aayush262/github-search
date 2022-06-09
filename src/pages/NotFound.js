import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "./../Components/Layouts/Container";

const NotFound = () => {
  const params = useParams();
  return (
    <Container>
      <div className="h-screen w-full flex justify-center items-center">
        <div>
          <h2 className="text-4xl font-redHat text-bold text-center">
            Error 404
          </h2>
          <p className="text-gray-600 leading-[1.5]">
            The requested url &nbsp;
            <span className="text-bold text-black">''/{params["*"]}'</span> is
            not found
          </p>
          <div className="text-center">
            {" "}
            <Link to="/" className="cursor-pointer text-blue-600 ">
              Home
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
