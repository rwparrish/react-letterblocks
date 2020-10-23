import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    text: " ",
    textLength: null
  };

  textLengthHandler = (event) => {
    let textLength = {
      ...this.state.textLength
    }

    textLength = event.target.value.length

    this.setState({
      textLength: textLength
    })
  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.textLengthHandler} />
        <p>{this.state.textLength}</p>   
      </div>
    );
  }
};

export default App;
