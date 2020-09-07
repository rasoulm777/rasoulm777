import React, { Component } from "react";
import Nav from "../components/nav";
import "./first.css";
import './second.css'
import TimeLine from '../components/timeline'


export default class firstLayout extends Component {
  render() {
    return (
      <>
      <div style={{backgroundColor:"#78e08f"}}>
      <Nav/>
      </div>
      <div className='sabt'>
      <p>&#9754; ثبت درخواست اولیه</p>
      </div>
      <div>
            <TimeLine/>
      </div>

      </>
    );
  }
}
