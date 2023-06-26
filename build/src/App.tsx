import React from 'react';
import UserFirstart from './components/UserFirestart';
import Video from './components/Video';
import Nemo from './components/Nemo';
import { Fragment } from 'react';

function App() {
  const name ='리액트';
  return (
    
    <div>
      <>
      <div className='react'>{name}</div>
      <input />
      </>
      <UserFirstart />
      <Video />
      <Nemo />
    </div>
    
  );
}

export default App;
