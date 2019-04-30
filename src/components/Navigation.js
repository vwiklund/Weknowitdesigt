import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/"> Citypop </NavLink>
      <NavLink
        to="/searchbycity"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Search by city
      </NavLink>
      <NavLink
        to="/searchbycountry"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        Search by country
      </NavLink>
    </div>
  );
};

export default Navigation;
