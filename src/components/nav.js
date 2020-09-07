

import React, { component } from "react";
import './nav.css'
import IconButton from '@material-ui/core/IconButton';
import MenuBookIcon from '@material-ui/icons/MenuBook';


export default function nav() {
    
  return (
    <>
      <div className="topnav" >
      <IconButton className='btnnav'>
        <MenuBookIcon />
        <span>دانشگاه شیراز</span>
      </IconButton>
        
        <a>صفحه اصلی</a>
        <a>صفحه اصلی</a>
        <a>صفحه اصلی</a>
        <a>صفحه اصلی</a>
        <a>ورود به سامانه</a>

        
      </div>

      
    </>
  );
}
