import React, { Component } from 'react';
import Asx from './components/about/asx'
import './App.css';
import { AboutTitel , AboutInfo} from './components/about/'

import Table from './components/table/table'

class App extends Component {
  render() {
    return (
      <div className="App">

       <Table />
       {/* <AboutTitel titel='ssssssssssss' info='wwwwwwwwwwwwwwww'/>
       <AboutInfo /> */}
      </div>
    );
  }
}

export default App;
