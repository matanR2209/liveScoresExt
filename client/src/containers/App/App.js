import React, {Component} from 'react';
import './App.css'

import Frame from '../Frame/Frame';
import GeneralModal from '../../components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Frame/>
        <GeneralModal/>
      </div>
    )
  }
}

export default App;
