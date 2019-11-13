import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: 'world!'
    };
  };

  handleClickFriend = ()=>{
    this.setState({
      who:'friend!'
    });
  };

  handleClickWorld = ()=>{
    this.setState({
      who:'world!'
    });
  };

  handleClickReact = ()=>{
    this.setState({
      who:'React!'
    });
  };
  
  render() {
    return (
      <div className="hello-world">
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleClickWorld}>World</button>
        <button onClick={this.handleClickFriend}>Friend</button>
        <button onClick={this.handleClickReact}>React</button>
      </div>
    );
  };
}
