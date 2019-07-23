import React from 'react';
import './SideButton.scss';

const SideButton = (props) => {
  const setButton = () => {
    if(props.img) {
      return (
        <button className="side-button">
          <div>{props.label}</div>
          <div><img src={props.img}/></div>
        </button>
      );
    }else {
      return (
        <button >
          <div>{props.label}</div>
        </button>
      );
    }
  }

  const button = setButton();
  return (
    <div onClick={props.action} >
      {button}
    </div>
  );
}

export default SideButton;
