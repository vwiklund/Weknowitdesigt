import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Searchbycountry from "./components/Searchbycountry";
import Searchbycity from "./components/Searchbycity";
import Navigation from "./components/Navigation";
import Error from "./components/Error";
import Titles from "./components/Titles";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Navigation />
                    <Switch>
                      <Route path="/" component={Home} exact />
                      <Route path="/searchbycity" component={Searchbycity} />
                      <Route
                        path="/searchbycountry"
                        component={Searchbycountry}
                      />
                      <Route component={Error} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
