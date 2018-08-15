import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';


class BabylonScene extends Component{

  onResizeWindow = () => {
    if (this.engine) {
      this.engine.resize();
    }
  }

  componentDidMount () {

    this.engine = new BABYLON.Engine(this.canvas, true );
    this.scene = new BABYLON.Scene(this.engine);
    this.props.onSceneMount({
      scene: this.scene,
      engine: this.engine,
      canvas: this.canvas
    });

    window.addEventListener('resize', this.onResizeWindow); // Resize the babylon engine when window is resized
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.onResizeWindow);
  }

  render () {

    const canvasView = {
      border: '2px solid black',
      width: '60%',
      
    };

    return (
      <canvas
        style={canvasView}
        ref={(c) => this.canvas = c}
      />
    );
  }
}

export default BabylonScene;
