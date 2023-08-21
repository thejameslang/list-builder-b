/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Search = ({
  className,
  searchDefaultClassName,
  search = "https://generation-sessions.s3.amazonaws.com/2a89d33b741f9f8d8cef99801a83dc7a/img/search.svg",
}) => {
  return (
    <div className={`search ${className}`}>
      <div className={`search-default ${searchDefaultClassName}`}>
        <img className="img" alt="Search" src={search} />
      </div>
    </div>
  );
};

Search.propTypes = {
  search: PropTypes.string,
};
