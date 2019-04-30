import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";
import Population from "./Population";
import Titles from "./Titles";
import Cities from "./Cities";
import TogglePopulation from "./TogglePopulation";

const API_KEY = "weknowit";
let val = 0;
function formatInput(str) {
  var pieces = str.split(" ");
  for (var i = 0; i < pieces.length; i++) {
    var j = pieces[i].charAt(0).toUpperCase();
    pieces[i] = j + pieces[i].substr(1).toLowerCase();
  }
  return pieces.join("%20");
}

class Searchbycountry extends Component {
  state = {
    population: undefined,
    city: undefined,
    error: undefined,
    type: undefined,
    value: undefined
  };

  getPopulation = async e => {
    e.preventDefault();
    const input = formatInput(e.target.elements.input.value);
    const api_call = await fetch(
      `http://api.geonames.org/searchJSON?q=${input}&orderby=population&maxRows=1000&style=LONG&lang=eng&username=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);

    if (data.geonames.length === 0) {
      console.log("error");
      this.setState({
        population: [undefined, undefined, undefined],
        city: [undefined, undefined, undefined],
        error: "no search found for " + input,
        type: [undefined, undefined, undefined]
      });
    } else if (input === "") {
      console.log(data);
      this.setState({
        population: [undefined, undefined, undefined],
        city: [undefined, undefined, undefined],
        error: "please enter a city...",
        type: ""
      });
    } else if (
      data.geonames[0].fclName.split(",")[0] !== "country" &&
      data.geonames.length > 4
    ) {
      let i = 0;
      while (i < 5) {
        if (data.geonames[i].fclName.split(",")[0] === "country") {
          console.log("did you mean " + data.geonames[i].name);
          i++;
          console.log(i);
        }
        i++;
      }
    } else if (data.geonames[0].fclName.split(",")[0] === "country") {
      let i = 0;
      let j = 0;
      const newData = [undefined, undefined, undefined];
      while (i < 3) {
        if (data.geonames[j].fclName.split(",")[0] === "city") {
          newData[i] = data.geonames[j];
          console.log(j);
          i++;
        }
        j++;
      }
      this.setState({
        population: [
          newData[0].population,
          newData[1].population,
          newData[2].population
        ],
        city: [newData[0].name, newData[1].name, newData[2].name],
        error: "no search found for " + input,
        type: undefined
      });
      console.log(newData);
      console.log(this.state.population[1]);
    }
  };

  render() {
    return (
      <div>
        <Form getPopulation={this.getPopulation} />
        <Cities
          population={this.state.population}
          city={this.state.city}
          error={this.state.error}
          type={this.state.type}
        />
        {/* {this.state.population && (
          <TogglePopulation>
            {this.state.city}
            <p className="weather__key">
              {this.state.city[0]} Population:
              <span className="weather__value">
                {" "}
                {this.state.population[0]}
              </span>
            </p>
          </TogglePopulation>
        )} */}
      </div>
    );
  }
}

export default Searchbycountry;

// render() {
//   return (
//     <div>
//       <Form getPopulation={this.getPopulation} />
//       <Cities
//         population={this.state.population}
//         city={this.state.city}
//         error={this.state.error}
//         type={this.state.type}
//       />
//     </div>
//   );
// }

// <div>
//         <Form getPopulation={this.getPopulation} />
//         <div>
//           {this.state.error && (
//             <p className="weather__error">{this.state.error}</p>
//           )}

//           {this.state.city && (
//             <p className="weather__key">
//               Location:
//               <p>
//                 <span className="weather__value"> {this.state.city[0]}</span>
//               </p>
//               <p>
//                 <span className="weather__value"> {this.state.city[1]}</span>
//               </p>
//               <a>
//                 <span className="weather__value"> {this.state.city[2]}</span>
//               </a>
//             </p>
//           )}
//           {this.state.population && (
//             <TogglePopulation>{this.state.population[1]}</TogglePopulation>
//           )}
//           {this.state.type && (
//             <p className="weather__error">{this.state.type}</p>
//           )}
//         </div>
//       </div>
