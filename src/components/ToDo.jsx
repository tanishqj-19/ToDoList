import React from "react";



function ToDo(props){
  return (
    <div onClick={() =>
        props.onChecked(props.id)}> 
      <li> {props.value} </li>
    </div>
  );
}

export default ToDo;