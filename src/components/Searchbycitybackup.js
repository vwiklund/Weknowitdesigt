import React, { Component } from "react";
import { Link } from "react-router-dom";

const Searchbycity = () => {
  return (
    <div>
      <h1>Search by city</h1>
      <Link to="/searchbycity">
        <button type="button" className="btn btn-info">
          Button
        </button>
      </Link>
    </div>
  );
};

export default Searchbycity;
