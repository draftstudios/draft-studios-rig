import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import Person from './Person';
import Floor from './Floor';
import Parallax from './Parallax';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        floor: "20vh",
        deltaY: 0,
        currentPosition: 0,
    };
  }

  handleWheel = (e) => {
      console.log(e.deltaY);
      const currentposition = this.state.currentPosition;

      this.setState({
          deltaY: e.deltaY,
          currentPosition: currentposition+e.deltaY > 0 ? currentposition + e.deltaY : 0, 
      });

      e.preventDefault ? e.preventDefault() : null;
      e.stopPropagation ? e.stopPropagation() : null;
  }

  render() {
    const scrollChange = this.state.deltaY;
    const pos = this.state.currentPosition;

    return (
        <Canvas scroll={this.handleWheel}>
            {/* background!!! */}
            <Parallax move={pos} x="200" floor={this.state.floor} ratio="1.2" opacity="1" color="transparent" asset="Zaykim.png"/>

            {/* poopy building!!! */}
            <Parallax move={pos} x="800" floor={this.state.floor} ratio="1" opacity="1" color="brown"/>

            {/* clouds!!! */}
            <Parallax move={pos} x="50" y="25" ratio="0.5" opacity="0.9" color="white"/>
            <Parallax move={pos} x="440" y="200" ratio="2" opacity="0.7" color="yellow"/>
            <Parallax move={pos} x="770" y="100" ratio="1.25" opacity="1" color="pink"/>
            <Parallax move={pos} x="1550" y="50" ratio="0.75" opacity="0.5" color="violet"/>
            <Parallax move={pos} x="1750" y="125" ratio="2.25" opacity="0.9" color="red"/>
            <Parallax move={pos} x="2750" y="10" ratio="0.25" opacity="0.6" color="white"/>
            <Parallax move={pos} x="3750" y="80" ratio="1.25" opacity="1" color="white"/>

            {/* green floor!!! */}
            <Floor move={pos} x="0" height={this.state.floor} ratio="1" width="20000"/>

            <Person key="1" pos={pos} floor={this.state.floor} deltay={scrollChange} />

            {/* orange building that is in front of person!!! */}
            <Parallax move={pos} x="600" floor={this.state.floor} ratio="1" opacity="1" color="orange"/>
        </Canvas>
    );
  }
}

export default App;
