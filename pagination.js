// Implementation of Pagination

import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./component/ImageGrid/imageGrid";
import Loading from "./component/loading/loading";
import PaginationBar from "./component/paginationBar";

const BASE_API_URL = "https://picsum.photos/v2/list";

const itemsPerPage = 30;

function Pagination() {
  const [imageObjects, setImageObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


const fetchImages = () => {
    const pageNo  = 0;
    setIsLoading(true);
    axios.get(`${BASE_API_URL}?page=${pageNo}`)
    .then((res) => {
      console.log(res.data);
      setImageObjects([...imageObjects, ...res]);
      setIsLoading(false);
    })
  };


  const handleNextPageCall = () => {
    const nextEndIndex = (currentPage + 1) * itemsPerPage;
    setCurrentPage(currentPage + 1);

    if (imageObjects.length < nextEndIndex) {
      fetchImages();
    }
  };

  const handlePrevPageCall = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    console.log(imageObjects);
    console.log(endIndex);

    return imageObjects.slice(startIndex, endIndex);
  };

  return (
    <div className="App">
      <h2>Custom List View</h2>
      <div className="container">
        <>
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  {imageObjects.length ? (
                    <>
                      <PaginationBar
                        handlePrevPageCall={handlePrevPageCall}
                        currentPage={currentPage}
                        handleNextPageCall={handleNextPageCall}
                      />
                      <ImageGrid imageObjects={getPaginatedData()} />
                      <PaginationBar
                        handlePrevPageCall={handlePrevPageCall}
                        currentPage={currentPage}
                        handleNextPageCall={handleNextPageCall}
                      />
                    </>
                  ) : null}
                </>
              )}
            </>
      </div>
    </div>
  );
}

export default Pagination;
