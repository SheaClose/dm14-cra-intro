import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      catName: "",
      imgUrl: "",
      cats: []
    };
  }

  handleNameChange(e) {
    this.setState({
      catName: e.target.value
    });
  }

  handleImgUrlChange(e) {
    this.setState({ imgUrl: e.target.value });
  }

  handleClick() {
    const cat = {
      catName: this.state.catName,
      imgUrl: this.state.imgUrl
    };
    let newArr = this.state.cats.slice();
    newArr.push(cat);
    this.setState({ cats: newArr });
  }

  render() {
    let catsArr = this.state.cats.map(cat => (
      <div>
        <img width="250" src={cat.imgUrl} />
        <h5> {cat.catName} </h5>
      </div>
    ));

    return (
      <div className="App">
        <h1> Cat Book </h1>
        <div>
          <input onChange={e => this.handleNameChange(e)} />
          <input onChange={e => this.handleImgUrlChange(e)} />
          <br />
          <button onClick={() => this.handleClick()}>Submit</button>
          {catsArr}
        </div>
      </div>
    );
  }
}

export default App;
