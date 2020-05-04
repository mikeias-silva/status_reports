import React, { Component, Fragment } from 'react';
import Header from '../src/components/header/header.js';
import Charts from '../src/components/charts/charts.js';
import Routes from './routes';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';



const divStyle = {
  height: "985px",
  backgroundColor: '#4d4d4d',
  paddingTop: "5px"
};
function App() {

  return (
    <div className="App" style={divStyle}>
     
        <div style={{backgroundColor: "#FFFFFF", height: "950px", marginLeft: "20px", marginRight:"20px", marginTop: "15px"}} container>
          <Header />
          <Charts />
          <Routes />
        </div>
     
    </div>


  );
}

export default App;
