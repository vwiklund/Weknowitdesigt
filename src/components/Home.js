import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="title-container__title2">Citypop</h1>
      <Link to="/searchbycity">
        <button type="button" className="btn btn-info">
          Search by city
        </button>
      </Link>
    </div>
  );
};

export default Home;
