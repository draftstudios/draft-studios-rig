import React, { Component } from 'react';

class Floor extends Component {

    constructor(props) {
      super(props);
      this.state = {
          startingPositionX: this.props.x,
          startingPositionY: this.props.y,
      };
      this.currentPosition = this.props.x;
    }

  render() {
    const startingpositionx = this.state.startingPositionX - (this.props.move * this.props.paradoxratio); 
    const startingpositiony = this.state.startingPositionY;
    const height = this.props.maxheight;
    const width = this.props.width;

    return (
        <div className="floor" style={{
                bottom: 0, 
                width: width+'px', 
                height: height, 
                left: startingpositionx+'px', 
                top: startingpositiony+'px', 
                position: "absolute",
                backgroundColor: "green",
            }} 
            onWheel={this.props.scroll}>
        </div>
    );
  }
}

export default Floor;
