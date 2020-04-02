import React from 'react';
import './App.css';
import Post from './components/Post/Post';

const App = () => {
  return (
    <div className={'app-container'}>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
    </div>
  );
}


export default App;
