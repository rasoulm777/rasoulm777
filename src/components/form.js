import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Modal from './modal'
import "./form.css";

export default class firstLayout extends Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }
    
  getNumber = (e) => {
    let res = e.target.value;
    this.setState({data:res})
    console.log(this.state.data)
  };
 
  getValue = ()=>{
      return(
          this.state.data.num
      )
  }
  render() {
    return (
      <>
        <div className="sabt">
          <p>
            &#9754; برای ثبت در خواست خرید سامانه مدرسه خود اطلاعات زیر را تکمیل
            کنید
          </p>
        </div>
        <div className="forms">
          <div className="inputs">
            <TextField
              type="number"
              className="inputs"
              label="کد مدرسه"
              variant="outlined"
            />
          </div>
          <div className="inputs">
            <TextField
              type="number"
              className="inputs"
              label="شماره موبایل"
              variant="outlined"
              onChange={this.getNumber}
            />
          </div>
          <div className='btnmodal'>
          
          <Modal title={this.state.data}/>
          </div>
        </div>
      </>
    );
  }
}
