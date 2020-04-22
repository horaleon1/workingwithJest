import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: false
    };
  }
  decremementCounter = () => {
    if (this.state.counter <= 0) {
      this.setState({ message: !this.state.message });
    } else {
      this.setState({ counter: this.state.counter - 1 });
      this.setState({ message: false });
    }
  };
  render() {
    if(this.state.message){
      return <p style={{ color: 'red' }}>El counter no puede ser menor a 0</p>
    }
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>
          The counter is currently {this.state.counter}
        </h1>
        <button
          data-test='increment-button'
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          data-test='decrement-button'
          onClick={() => this.decremementCounter()}
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
