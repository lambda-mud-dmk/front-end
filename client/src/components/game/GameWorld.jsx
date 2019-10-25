import React, { Component } from 'react';
import axios from 'axios';
import Controls from '../controls/Controls';
import { GameDiv, GameMap, GameControls } from './GameWorldStyles';
import Room from './Room';

// const apiUrl = 'http://127.0.0.1:8000/api/adv/rooms';
const apiUrl = 'https://dmk-csbw1.herokuapp.com/api/adv/rooms';

class GameWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      player: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, player: nextProps.player });
  }
  async componentDidMount() {
    await this.fetchInit();
    const rooms = await this.fetchRooms();
    this.setState({ ...this.state, rooms });
  }

  fetchRooms = async () => {
    const response = await axios.get(`${apiUrl}/adv/rooms`);
    return response.data.room;
  };

  fetchInit = async () => {
    const token = localStorage.getItem('key');
    const response = await axios.get(`${apiUrl}/adv/init/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token
      }
    });
    const player = response.data;
    this.updatePlayer(player);
  };

  updatePlayer = player => {
    this.setState({ ...this.state, player });
  };

  displayRows = row => {
    return (
      <div>
        {row.map(room => (
          <Room room={room} player={this.state.player} />
        ))}
      </div>
    );
  };

  render() {
    const { rooms } = this.state;
    const arrangedRooms = [];
    if (rooms) {
      let temp = [];
      rooms.forEach((room, i) => {
        if (i > 0 && i % 10 === 0) {
          arrangedRooms.push(temp);
          temp = [];
          temp.push(room);
        } else {
          temp.push(room);
        }
      });
      arrangedRooms.push(rooms.slice(90));
    }
    return (
      <GameDiv>
        <GameMap>
          {arrangedRooms && arrangedRooms.map(this.displayRows)}
        </GameMap>
        <GameControls id="controls">
          <Controls
            player={this.state.player}
            updatePlayer={this.updatePlayer}
          />
        </GameControls>
      </GameDiv>
    );
  }
}

export default GameWorld;
