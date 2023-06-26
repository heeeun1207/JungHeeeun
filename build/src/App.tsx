import React from 'react';
import UserFirstart from './components/UserFirestart';
import Video from './components/Video';
import Nemo from './components/Nemo';
import { Fragment } from 'react';

function App() {
  const name ='리액트';
  return (
    
    <div>
      {/* jsx 내부에서 주석 작성하기 */}
      <>
      <div className='react'>{name}</div>
      <input />
      </>
      <UserFirstart />
      <Video />
      <Nemo />
      //이런 주석은 페이지에 그대로 나타난다.
    </div>
    
  );
}

export default App;
