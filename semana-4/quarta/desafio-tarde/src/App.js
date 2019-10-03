import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Post } from "./components/Post";


const Body = styled.body `
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`

const Feed = styled.main `
  display: flex;
  flex-direction: column;
`

const Form = styled.form `
  display: flex;
  flex-direction: column;
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      novoPost: [
        {
          url: '',
          usuario: '',
          foto: ''
        }
      ]
    }
  }



  render () { 
    return (
    <Body>
      <Form>
        <input type="text" placeholder="Seu nome"></input>
        <input type="text" placeholder="Link da sua foto de perfil"></input>
        <input type="text" placeholder="Link da postagem"></input>
      </Form>
      <Feed>
        <Post />
        <Post />
        <Post />
      </Feed>
    </Body>
    );
  }
}
  

export default App;
