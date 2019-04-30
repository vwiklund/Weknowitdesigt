import React, { Component } from "react";
import TogglePopulation from "./TogglePopulation";

let value = 0;

const Cities = props => (
  <div>
    {props.error && <p className="weather__error">{props.error}</p>}

    {props.city && (
      //   <p className="weather__key">
      //     Location:
      //     <p>
      //       <span className="weather__value"> {props.city[0]}</span>
      //     </p>
      <TogglePopulation>
        {props}
        {/* <p className="weather__key">
              {this.state.city[0]} Population:
              <span className="weather__value">
                {" "}
                {this.state.population[0]}
              </span>
            </p> */}
      </TogglePopulation>
      /* <p>
          <span className="weather__value"> {props.city[1]}</span>
        </p>
        <a>
          <span className="weather__value"> {props.city[2]}</span>
        </a>
      </p> */
    )
    /* {props.population && (
      <p className="weather__key">
        Population:
        <span className="weather__value"> {value}</span>
      </p>
    )} */
    }
    {props.type && <p className="weather__error">{props.type}</p>}
  </div>
);
export default Cities;

{
  /* <div>
    {props.error && <p className="weather__error">{props.error}</p>}

    {props.city && (
      <p className="weather__key">
        Location:
        <a href="#" onClick={(value = 3)}>
          <span className="weather__value"> {props.city[0]}</span>
        </a>
        <a>
          <span className="weather__value"> {props.city[1]}</span>
        </a>
        <a>
          <span className="weather__value"> {props.city[2]}</span>
        </a>
      </p>
    )}
    {props.population && (
      <p className="weather__key">
        Population:
        <span className="weather__value"> {value}</span>
      </p>
    )}
    {props.type && <p className="weather__error">{props.type}</p>}
  </div> */
}
