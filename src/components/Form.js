import React from "react";

const Form = props => (
  <div>
    <form onSubmit={props.getPopulation}>
      <input type="text" name="input" placeholder="city..." />
      <button>get Population</button>
    </form>
  </div>
);
export default Form;
