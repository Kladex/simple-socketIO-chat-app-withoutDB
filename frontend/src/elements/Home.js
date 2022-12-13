import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');

  return (
    <>
      <div className='content-join-form'>
        <label>Enter Nick Name : </label>
        <input
          type='text'
          className='inputBox'
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <br />
        <label>Enter Room ID : </label>
        <input
          type='text'
          className='inputBox'
          onChange={(e) => setRoomId(e.target.value)}
        />
        <Link to={userName && roomId ? `/chatting/${roomId}/${userName}` : ''}>
          <button type='submit' className='btn-join'>
            Join
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
