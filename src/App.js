import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sample: {}
    }
  }

  componentWillMount() {
    fetch('http://localhost:3002/api')
        .then(res => res.json())
        .then(data => this.setState({
            sample: data
        }));
  }

  render() {
    const data = this.state.sample.greeting;

    return(
      <div className="App">
        {data}
      </div>
    );
  }
}
export default App;
