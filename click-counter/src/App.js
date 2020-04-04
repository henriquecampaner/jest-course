import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    }
  }

  increment = () => {
    this.setState({counter: this.state.counter + 1})
    this.setState({error: false})
  }

  decrement = () => {
    if(this.state.counter === 0) {
      this.setState({error: true})
      return
    }
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        {this.state.error && (<span data-test="counter-display-error">The counter can't go below zero</span>)}

        <button
        data-test="increment-button"
        onClick={this.increment}
        >
          Increment button
        </button>

        <button
        data-test="decrement-button"
        onClick={this.decrement}
        >
          Decrement button
        </button>
      </div>
    );
  }
}

export default App;
