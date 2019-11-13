import React from "react";

export default class RouletteGun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false
    };
  }

  handleClickTrigger = () => {
    console.log("pew pew");
    this.setState(
      {
        spinningTheChamber: true
      },
      () => {
        this.timeout = setTimeout(() => {
          const bullet = Math.ceil(Math.random() * 8);
          this.setState({
            spinningTheChamber: false,
            chamber: bullet
          });
        }, 2000);
      }
    );
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render(bulletInChamber = 8) {
    const fate = this.state.spinningTheChamber
      ? "spinning the chamber and pulling the trigger!..."
      : bulletInChamber === this.state.chamber
      ? "BANG!!!!"
      : "you're safe!!";
    return (
      <div className="roulette-gun">
        <p> {fate}</p>
        <button onClick={this.handleClickTrigger}>Pull the Trigger!</button>
      </div>
    );
  }
}
