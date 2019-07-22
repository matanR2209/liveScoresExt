import React from 'react';
import './SideButton.scss';
import connect from 'react-redux/es/connect/connect'
const SideButton = (props) => {
  return (
    <div onClick={props.action} >
      <button>{props.label}</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // updateDataPresentedHandler :  (val)=> dispatch({type: 'UPDATE_PRESENTED_TEAM', value: val})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideButton);
