import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar/navbar';
import Post from './components/post';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
    post: []
  }
}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ post:data 
      }));
      
    }
  render() {
    return (
      <div className="App">
        <Navbar />
        
        {this.state.post.map((item) =>
          <Post item={item} />)}

      </div>
    );
  }
}



export default App;
