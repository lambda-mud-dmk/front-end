import React from 'react';
import styled from 'styled-components';

const RoomDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    !props.direction.includes('wall_w')
      ? 'border-left: 1px solid #fcfcfc'
      : 'border-left: 1px solid transparent'};
  ${props =>
    !props.direction.includes('wall_n')
      ? 'border-top: 1px solid #fcfcfc'
      : 'border-top: 1px solid transparent'};
  ${props =>
    !props.direction.includes('wall_e')
      ? 'border-right: 1px solid #fcfcfc'
      : 'border-right: 1px solid transparent'};
  ${props =>
    !props.direction.includes('wall_s')
      ? 'border-bottom: 1px solid #fcfcfc'
      : 'border-bottom: 1px solid transparent'};
`;

const Player = styled.div`
  width: 30px;
  height: 30px;
  background: #fcfcfc;
  border-radius: 50%;
`;

class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room: props.room,
      player: props.player
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ room: nextProps.room, player: nextProps.player });
  }

  render() {
    const {
      id,
      title,
      player,
      wall_n,
      wall_s,
      wall_w,
      wall_e
    } = this.state.room;
    let direction = '';
    if (wall_n !== 0) {
      direction = 'n';
    }
    if (wall_s !== 0) {
      direction = 's';
    }
    if (wall_w !== 0) {
      direction = 'w';
    }
    if (wall_e !== 0) {
      direction = 'e';
    }
    if (player) {
      console.log('Player::', player);
    }

    return (
      <RoomDiv direction={direction}>
        {this.state.player &&
        this.state.player['room_id'] === this.state.room.id ? (
          <Player />
        ) : null}
      </RoomDiv>
    );
  }
}

export default Room;
