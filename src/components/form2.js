import React, { Component } from "react";
import Axios from "axios";
import './form.css'
export default class Form2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    Axios.get("https://api.jsonbin.io/b/5f553ee3993a2e110d3fc004").then((res) => {
      this.setState({users:res.data})
      console.log(this.state.users.name);
    });
  }
  render() {
    return (
      <>
        <div className="sabt">
          <p className='pp'>
            &#9754;شما در حال ثبت درخواست خرید برای مدرسه با کد اختصاصی {}{" "}
            ومشخصات ذیل هستید
          </p>

          <div>
            {this.state.users.map((item) => {
              return (
                <div key={item.id}>
                  <p>نام مدرسه : {item.name}</p>
                  <p>مفطع : {item.maq}</p>
                  <p>نام مدیر : {item.mname}</p>
                  <p>شماره موبایل مدیر : {item.mob}</p>
                  <p>آدرس مدرسه : {item.address}</p>
                  <p>کد پستی : {item.code}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
