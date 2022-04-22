import React from "react";
import Button from "./button/Button"


const PaginationBar = ({
    handlePrevPageCall,
    currentPage,
    handleNextPageCall,
  }) => {
      return(
    <div className="btn-container">
      <Button onClick={handlePrevPageCall}>Previous Page</Button>
      <div className={"current-page"}>Page {currentPage}</div>
      <Button onClick={handleNextPageCall}>Next Page</Button>
    </div>
  )};

  export default PaginationBar;