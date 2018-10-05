import React, { Component } from 'react';

class Parallax extends Component {

    constructor(props) {
      super(props);
      this.state = {
          startingPositionX: this.props.x,
          startingPositionY: this.props.y,
      };
    }

  render() {
        const startingpositionx = this.state.startingPositionX - (this.props.move * this.props.ratio); 
        const startingpositiony = this.state.startingPositionY;
        const floor = this.props.floor;
        const color = this.props.color;
        const asset = this.props.asset;
        const opacity = this.props.opacity;

    return (
        <div className="parallax"
                style={{ left: startingpositionx+'px', 
                    top: startingpositiony+'px', 
                    bottom: floor,
                    position: "absolute", 
                    display: "flex",
                    backgroundColor: color,
                    opacity: opacity,
                }}>
            { asset ? <img src={"assets/"+asset} alt={asset} /> : 
                floor ? 
                    <span>
                    I'm<br/> 
                    A <br/>
                    Building...<br/>
                    A...<br/>
                    Tall...<br/>
                    Skyscraper...<br/>
                    At...<br/>
                    Least...<br/>
                    A...<br/>
                    Million...<br/>
                    Feet...<br/>
                    Taller...<br/>
                    Than...<br/>
                    You...<br/>
                    </span>
                    :
                    <span>
                    Imagine me to be a single cloud...<br/>
                    A big fluffy, puffy cloud...
                    Where ideas float in the sky.<br/>
                    </span>
            }
        </div>
    );
  }
}

Parallax.defaultProps = {
    color: "white",
    opacity: 1,
    x: 0,
};

export default Parallax;
