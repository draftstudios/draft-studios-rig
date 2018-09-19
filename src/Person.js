import React, { Component } from 'react';

class Person extends Component {

  constructor(props) {
    super(props);
    this.state = {
        deltaY: 0,
        direction: 1,
    };
    this.timerID = this.timer();
  }

  timer = () => setTimeout(() => { 
    this.resetPerson();
  }, 500);

  resetPerson = () => {
    this.setState({ deltaY: 0, });
  }

  componentDidUpdate(prevProps) {
    if (this.props.deltay !== prevProps.deltay) {
        clearTimeout(this.timerID);
        this.timerID = this.timer(); //start and track a new timer
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.deltay !== this.props.deltay) {
      this.setState({ deltaY: nextProps.deltay });
      this.setState({ direction: nextProps.deltay });
    }

    if (nextProps.pos !== this.props.pos) {
      this.setState({ running: 1 });
        // here i'm marking running status if we're scrolling
    } else {
      this.setState({ running: 0, runToggle: 0 });
        // if not moving (no pos) then reset running and runToggle frame...
    }
  }

  facing = (direction) => {
    return direction ? "person av-forward" : "person av-backward";
  }

  render() {
    const deltay = this.state.deltaY;
    const direction = this.state.direction;
    const facing = this.facing(direction);

    return (
        <div className={facing} style={{bottom: this.props.floor, color: "white", backgroundColor: "black"}}>
            {
                deltay > 0 &&
                    <span> You're moving forward in life!</span>
            } 
            {
                deltay < 0 &&
                    <span>You're moving backwards!</span>
            } 
            {
                deltay === 0 &&
                    <span>You're stale! And you're facing {direction}</span>
            } 
        </div>
    );
  }
}

export default Person;
