import React from 'react';
import Texture from './Texture';
import TextureData from './TextureData';

const Textures = (props) => {

  const textures = TextureData.map((data) => 
                                    <Texture key={data["id"]} srcTexture={data["texture"]} /> 
                                  );
                                    
  return (
      <div style={{display: 'flex', alignItems: 'flex-start'}}>
        {textures}
      </div>
  );
}

export default Textures;