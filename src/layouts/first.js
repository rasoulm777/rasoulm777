import React, { Component } from "react";
import Nav from "../components/nav";
import "./first.css";
import Img from "../img/left.svg";
import Button from "@material-ui/core/Button";

export default class firstLayout extends Component {
  clickHandler= () =>{
    window.location.replace('/login')
  }
  render() {
  
    return (
      <div className="first_bg">
        <div className="second_bg">
          <Nav />
          <div className="container">
            <div className="container2">
              <img src={Img} />
            </div>
            <div className="container2">
              
              <h1>سامانه جامع آموزش انلاین دانشگاه شیراز</h1>
              <div className='m'>
              <Button variant="contained" color="primary" className="btn" onClick={this.clickHandler}>
                خرید سامانه
              </Button>
              </div>
              <div className='m b'>
              <Button
                variant="outlined"
                color="primary"
                href="#outlined-buttons"
                className="btn"
              >
                پیگیری خرید
              </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
