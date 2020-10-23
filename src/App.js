import './App.css';
import { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: " ",
    textLength: null
  };

  textHandler = (event) => {
    let textLength = {
      ...this.state.textLength
    };

    let text = {
      ...this.state.text
    };
    
    text = event.target.value;
    textLength = event.target.value.length;

    this.setState({
      textLength: textLength,
      text: text
    })
  };

  deleteHandler = (index) => {
    const text = [...this.state.text.split("")]
    text.splice(index, 1);
    let newString = text.join("");

    this.setState({
      text: newString
    })
  }

  render() {

    let textArray = this.state.text.split("");

    let charBlock = textArray.map((char, i) => {
      return <CharComponent 
        key={i} 
        char={char}
        click={() => this.deleteHandler(i)}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textHandler(event)} value={this.state.text} />
        <p>{this.state.textLength}</p>
        <ValidationComponent length={this.state.textLength}/>
        {charBlock}
      </div>
    );
  }
};

export default App;
