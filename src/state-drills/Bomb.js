import React from "react";

export default class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "tick",
          count: 0
        };
      }

      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          this.setState({
            count: this.state.count+1
          })
        }, 1000)
      }

  componentWillUnmount(){
    clearInterval(this.interval);
  }
  
  render() {
     console.log(this.state.count) 
    const tickOrTock = this.state.count %2===0? "tick":"tock";
    return (
      <div className="bomb">
        <p>{this.state.count >= 8? "BOOM!!": tickOrTock}</p>
       
      </div>
    );
  };
}
