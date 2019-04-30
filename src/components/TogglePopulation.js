import React, { Component } from "react";

export default class TogglePopulation extends Component {
  state = {
    on1: false,
    on2: false,
    on3: false
  };

  toggle1 = () => {
    this.setState({
      on1: !this.state.on1
    });
  };
  toggle2 = () => {
    this.setState({
      on2: !this.state.on2
    });
  };
  toggle3 = () => {
    this.setState({
      on3: !this.state.on3
    });
  };
  render() {
    return (
      <div>
        <p>
          <a onClick={this.toggle1}>
            {
              <span className="weather__value2">
                {" "}
                {this.props.children.city[0]}
              </span>
            }
          </a>
          {this.state.on1 && (
            <span className="weather__key">
              {" "}
              Population:
              <span className="weather__value">
                {" "}
                {this.props.children.population[0]}
              </span>
            </span>
          )}
        </p>

        <p>
          <a onClick={this.toggle2}>
            {
              <span className="weather__value2">
                {" "}
                {this.props.children.city[1]}
              </span>
            }
          </a>
          {this.state.on2 && (
            <span className="weather__key">
              {" "}
              Population:
              <span className="weather__value">
                {" "}
                {this.props.children.population[1]}
              </span>
            </span>
          )}
        </p>
        <p>
          <a onClick={this.toggle3}>
            {
              <span className="weather__value2">
                {" "}
                {this.props.children.city[2]}
              </span>
            }
          </a>
          {this.state.on3 && (
            <span className="weather__key">
              {" "}
              Population:
              <span className="weather__value">
                {" "}
                {this.props.children.population[2]}
              </span>
            </span>
          )}
        </p>
      </div>
    );
  }
}
