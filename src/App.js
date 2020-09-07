import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Second from "./layouts/second";
import First from "./layouts/first";


class App extends Component {
  render() {
    return ( 
      
        <BrowserRouter>
          <Switch>
            <Route path="/login">
              <Second/>
            </Route>
            <Route path="/">
              <First/>
            </Route>
          </Switch>
        </BrowserRouter>

        
      
      
    );
    
  }
  
}

export default App;
