import React from 'react';
import ColoredText from './components/ColoredText';
import './App.css';

class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {indexes: [true, true, true], boldColor: [false, false, false], color: "black"};
      this.colorClick = this.colorClick.bind(this);
      this.indexClick = this.indexClick.bind(this);
    }
  render() {
    return (
    <div ref={this.myRef}>
      <h1>Colors</h1>
      <p onClick={(e) => this.colorClick("red", 0)} className={this.state.boldColor[0] ? "bold" : ""}>Red</p>
      <p onClick={(e) => this.colorClick("blue", 1)} className={this.state.boldColor[1] ? "bold" : ""}>Blue</p>
      <p onClick={(e) => this.colorClick("green", 2)} className={this.state.boldColor[2] ? "bold" : ""}>Green</p>
      <br />
      <h1>Indexes</h1>
      <p onClick={(e) => this.indexClick(0, e)} className="bold">1</p>
      <p onClick={(e) => this.indexClick(1, e)} className="bold">2</p>
      <p onClick={(e) => this.indexClick(2, e)} className="bold">3</p>
      <br />
      <h1>Result</h1>
      <ColoredText label="1" color={this.state.indexes[0] ? this.state.color : "black"}/>
      <ColoredText label="2" color={this.state.indexes[1] ? this.state.color : "black"}/>
      <ColoredText label="3" color={this.state.indexes[2] ? this.state.color : "black"}/>
    </div>
      );
  }

  colorClick(colorToSet, id){
    this.setState({color: colorToSet});
    let boldColor = [...this.state.boldColor];    
    boldColor = [false, false, false];
    boldColor[id] = true;
    this.setState({ boldColor });
  }
  
  indexClick = (index, e) =>{
    let indexes = [...this.state.indexes];
    indexes[index] = !indexes[index];
    this.setState({ indexes });
    e.target.className = e.target.className == "bold" ? "" : "bold"
  }
}

export default App;