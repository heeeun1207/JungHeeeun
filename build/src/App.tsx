import React from 'react';
import UserFirstart from './components/UserFirestart';
import Video from './components/Video';
import { Fragment } from 'react';

function App() {
  return (
    
    <div>
      <UserFirstart />
      <Video />
      <div>
        Hello <b>react</b>
      </div>
      <Fragment>
        <h1>리액트 안녕 !</h1>
      </Fragment>
    </div>
    
  );
}

export default App;
