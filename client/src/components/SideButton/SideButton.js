import React from 'react';
import './SideButton.scss';
import connect from 'react-redux/es/connect/connect'

const axios = require('axios');

const SideButton = (props) => {
  return (
    <div onClick={() => props.updateDataPresentedHandler(props.val)} >
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
    updateDataPresentedHandler: (val) => axios.get("http://localhost:8080/" + val).then(response => {
      if(val === 'home' || val === 'away') {
        dispatch({
          type: 'UPDATE_PRESENTED_TEAM',
          response: response
        });
      } else if(val === 'stats') {
        dispatch({
          type: 'UPDATE_STATS_VISIBILITY',
          response: response
        });
      }else if( val === 'live') {
        dispatch({
          type: 'UPDATE_LIVE_GAMES_VISIBILITY',
          response: response
        });
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideButton);