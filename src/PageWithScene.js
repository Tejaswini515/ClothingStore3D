import React, { Component } from 'react';
import * as BABYLON from 'babylonjs';
import BabylonScene from './BabylonScene';

class PageWithScene extends Component {
    

  onSceneMount = (e) => {
    console.log('Inside PageWithScene');
    const { canvas, scene, engine } = e;

        const  camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 0.7, -2), scene);
        camera.detachControl(canvas);
        scene.clearColor = new BABYLON.Color4(1, 1, 1, 1);
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 0, 0), scene);
        light.intensity = 1.2;

        BABYLON.SceneLoader.ImportMesh('', 'HumanModel/', 'human.babylon', scene, function (newMeshes) {
          rotateMesh(newMeshes);
        });

        const rotateMesh = (mesh) => {
            const top1 = mesh[4];
            const top2 = mesh[3];
            top1.isVisible = top2.isVisible = false;
                    engine.runRenderLoop(() => {
                         if (scene) {
                            scene.render();
                        }
                    });
        }            
  }
    render() {
        return (
                <div>
                <BabylonScene onSceneMount={this.onSceneMount} />                
                </div>
        );
    }
}

export default PageWithScene;
