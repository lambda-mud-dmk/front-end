import React from 'react';
import styled from 'styled-components';

const RoomDiv = styled.div`
  width: 50px;
  height: 50px;
  /* border: 1px solid #fcfcfc; */
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.direction === 'w'
      ? 'border-left: 1px solid #fcfcfc'
      : 'border-left: 1px solid transparent'};
  ${props =>
    props.direction === 'n'
      ? 'border-top: 1px solid #fcfcfc'
      : 'border-top: 1px solid transparent'};
  ${props =>
    props.direction === 'e'
      ? 'border-right: 1px solid #fcfcfc'
      : 'border-right: 1px solid transparent'};
  ${props =>
    props.direction === 's'
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
      room: props.room
    };
  }
  componentWillReceiveProps(nextProps) {
    debugger;
    this.setState({ room: nextProps.room, player: nextProps.player });
  }
  render() {
    const { id, title, player, n_to, s_to, w_to, e_to } = this.state.room;
    let direction = '';
    if (n_to !== 0) {
      direction = 'n';
    } else if (s_to !== 0) {
      direction = 's';
    } else if (w_to !== 0) {
      direction = 'w';
    } else if (e_to !== 0) {
      direction = 'e';
    }
    if (player) {
      console.log('Player::', player);
    }

    return (
      <RoomDiv direction={direction}>
        {!player ? null : <Player>{id}</Player>}
      </RoomDiv>
    );
  }
}

export default Room;
