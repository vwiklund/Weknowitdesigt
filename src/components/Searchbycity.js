import React, { Component } from "react";
import Form from "./Form";
import Population from "./Population";

const API_KEY = "weknowit";

function formatInput(str) {
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join("%20");
}

function formatOutput(str) {
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join(" ");
}

class Searchbycity extends Component {
  state = {
    population: undefined,
    city: undefined,
    error: undefined,
    type: undefined
  };

  getPopulation = async e => {
    e.preventDefault();
    const input = e.target.elements.input.value;
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&maxRows=2&username=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    const formattedSearchInput = formatInput(input);
    const formattedOutput = formatOutput(input);

    if (data.geonames.length === 0) {
      this.setState({
        population: undefined,
        city: undefined,
        error: "no search found for " + input,
        type: undefined
      });
    } else if (input === "") {
      console.log(data);
      this.setState({
        population: undefined,
        city: undefined,
        error: "please enter a city...",
        type: undefined
      });
    } else if (
      formattedSearchInput === data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "city"
    ) {
      console.log(data);
      this.setState({
        population: data.geonames[0].population,
        city: data.geonames[0].name,
        error: "",
        type: data.geonames[0].fclName.split(",")[0]
      });
    } else if (
      formattedOutput === data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "country"
    ) {
      console.log(data);
      this.setState({
        population: undefined,
        city: undefined,
        error:
          formattedOutput +
          " is a country try out our search by country function",
        type: undefined
      });
    } else if (
      input != data.geonames[0].name &&
      data.geonames[0].fclName.split(",")[0] === "city"
    ) {
      console.log(data);
      this.setState({
        population: data.geonames[0].population,
        city: data.geonames[0].name,
        error: "did you mean: " + data.geonames[0].name + "?",
        type: data.geonames[0].fclName.split(",")[0]
      });
    } else {
      console.log(data.geonames[0].name + " " + formattedOutput);

      this.setState({
        error: "No search resault found for " + formattedOutput
      });
    }
  };

  render() {
    return (
      <div>
        <Form getPopulation={this.getPopulation} />
        <Population
          population={this.state.population}
          city={this.state.city}
          error={this.state.error}
          type={this.state.type}
        />
      </div>
    );
  }
}

export default Searchbycity;
