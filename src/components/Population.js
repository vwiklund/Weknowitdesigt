import React, { Component } from "react";

const Population = props => (
  <div>
    {props.error && <p className="weather__error">{props.error}</p>}

    {props.city && (
      <p className="weather__key">
        Location:
        <span className="weather__value"> {props.city}</span>
      </p>
    )}
    {props.population && (
      <p className="weather__key">
        Population:
        <span className="weather__value"> {props.population}</span>
      </p>
    )}
    {props.type && <p className="weather__error">{props.type}</p>}
  </div>
);
export default Population;
