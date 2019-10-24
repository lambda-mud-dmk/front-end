import React from 'react';
import axios from 'axios';

const styleControls = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignContent: 'stretch',
  height: '100vh'
};

const styleButtons = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'space-around',
  alignItems: 'center',
  alignContent: 'stretch',
  height: '100vh'
};

const buttonStyle = {
  border: '1px solid black',
  fontSize: '40px',
  padding: '1rem',
  cursor: 'pointer'
};

// const apiUrl = 'http://127.0.0.1:8000/api';
const apiUrl = 'https://dmk-csbw1.herokuapp.com/api';

const makeRequest = async (token, direction) => {
  try {
    const response = await axios.post(
      `${apiUrl}/adv/move/`,
      {
        direction
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token
        }
      }
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const sendMovement = async (token, direction) => {
  return await makeRequest(token, direction);
};

const Controls = room => {
  const [currentRoom, setCurrentRoom] = React.useState(
    room ? room : { title: '', description: '' }
  );
  const moveNorth = async () => {
    const token = localStorage.getItem('key');
    const room = await sendMovement(token, 'n');
    setCurrentRoom(room);
  };

  const moveSouth = async () => {
    const token = localStorage.getItem('key');
    const room = await sendMovement(token, 's');
    setCurrentRoom(room);
  };

  const moveEast = async () => {
    const token = localStorage.getItem('key');
    const room = await sendMovement(token, 'e');
    setCurrentRoom(room);
  };

  const moveWest = async () => {
    const token = localStorage.getItem('key');
    const room = await sendMovement(token, 'w');
    setCurrentRoom(room);
  };

  return (
    <>
      <div style={styleControls}>
        <div style={{ height: '25%' }}>
          <p>{currentRoom.title}</p>
          <p>{currentRoom.description}</p>
        </div>
        <div style={styleButtons}>
          <div onClick={moveNorth} style={buttonStyle}>
            ↑
          </div>
          <div onClick={moveWest} style={buttonStyle}>
            ←
          </div>
          <div onClick={moveEast} style={buttonStyle}>
            →
          </div>
          <div onClick={moveSouth} style={buttonStyle}>
            ↓
          </div>
        </div>
      </div>
    </>
  );
};

export default Controls;
