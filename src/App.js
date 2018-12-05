import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Post from './components/post';

class App extends Component {
 
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <Post/>
      </div>
    );
  }
}



export default App;
