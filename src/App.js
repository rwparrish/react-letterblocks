import './App.css';
import { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    text: ""
  };

  textHandler = (event) => {

    let text = {
      ...this.state.text
    };
    
    text = event.target.value;

    this.setState({
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
      return <Char 
        key={i} 
        char={char}
        click={() => this.deleteHandler(i)}/>
    });

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.textHandler(event)} value={this.state.text} />
        <p>{this.state.text}</p>
        <Validation length={this.state.text.length}/>
        {charBlock}
      </div>
    );
  }
};

export default App;
