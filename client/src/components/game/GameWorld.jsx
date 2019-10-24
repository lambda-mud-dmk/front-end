import React from 'react';
import axios from 'axios';
import Controls from '../controls/Controls';
import { GameDiv, GameMap, GameControls } from './GameWorldStyles';

const apiUrl = 'http://127.0.0.1:8000/api/adv/rooms';
// const apiUrl = "https://dmk-csbw1.herokuapp.com/api/adv/rooms";

const GameWorld = () => {
  return (
    <GameDiv id="main">
      <GameMap id="map">Map</GameMap>
      <GameControls id="controls">
        <Controls />
      </GameControls>
    </GameDiv>
  );
};

export default GameWorld;
