import React, { useEffect, useState } from "react";

import Spinner from "react-bootstrap/Spinner";

import Books from "../../Components/Books";
import API from "../../axios/api";

const IndexPage = () => {
  // Create state variables
  let [responseData, setResponseData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

  // fetches data
  useEffect(() => {
    const fetchBooks = () => {
      API.get("books")
        .then((response) => {
          setResponseData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };
    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-4 d-flex justify-content-center">
        <Spinner animation="border" />
      </div>
    );
  }

  return <Books data={responseData} />;
};

export default IndexPage;
