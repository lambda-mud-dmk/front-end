import React from 'react';
import Controls from '../controls/Controls';

const mainStyle = {
  display: 'flex',
  width: '100%',
  height: '100vh'
};

const mapStyle = {
    backgroundColor: "red",
    height: '100%',
    width: '70%'
}

const controlsStyle = {
    height: '75%',
    width: '30%'
}

const MainInterface = () => {
  return (
    <div style={mainStyle} id="main">
      <div style={mapStyle} id="map">Map</div>
      <div style={controlsStyle} id="controls">
          <Controls />
      </div>
    </div>
  );
};

export default MainInterface;
