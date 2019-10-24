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

const Room = props => {
  console.log(props);
  const { id, title, n_to, s_to, w_to, e_to } = props.room;
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
  console.log(direction);

  return (
    <RoomDiv direction={direction}>
      <Player />
    </RoomDiv>
  );
};

export default Room;
