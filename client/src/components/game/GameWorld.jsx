import React, { Component } from 'react';
import axios from 'axios';
import Controls from '../controls/Controls';
import { GameDiv, GameMap, GameControls } from './GameWorldStyles';

const apiUrl = 'http://127.0.0.1:8000/api/adv/rooms';
// const apiUrl = "https://dmk-csbw1.herokuapp.com/api/adv/rooms";

class GameWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }
  componentDidMount() {
    this.fetchRooms();
  }

  fetchRooms = async () => {
    const response = await axios.get(`${apiUrl}/adv/rooms`);
    console.log(response);
  };

  render() {
    return (
      <GameDiv>
        <GameMap>Map</GameMap>
        <GameControls id="controls">
          <Controls />
        </GameControls>
      </GameDiv>
    );
  }
}

export default GameWorld;
