import React from 'react';
import styled from 'styled-components';

const RoomDiv = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #fcfcfc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Player = styled.div`
  width: 30px;
  height: 30px;
  background: #fcfcfc;
  border-radius: 50%;
`;

const Room = ({ title }) => {
  return (
    <RoomDiv>
      <Player />
    </RoomDiv>
  );
};

export default Room;
