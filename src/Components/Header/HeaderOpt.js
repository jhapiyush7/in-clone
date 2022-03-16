import React from 'react'
import './HeaderOpt.css'
import Avatar from "@mui/material/Avatar";
function HeaderOpt(props) {
  return (
    <div>
      <div className="headeroption">
        {props.Icon && <props.Icon className="headeroption__icon" />}
        {props.avatar && <Avatar className="headeroption__icon" H/>}
        {/* <props.Icon/> */}
        <span className='headeroption__title'>{props.title}</span>
      </div>
    </div>
  );
}

export default HeaderOpt