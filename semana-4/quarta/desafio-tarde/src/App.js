import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Post } from "./components/Post";



const Body = styled.div `
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
      listaDePosts: [{
        seuNome: '',
        urlDoPerfil: '',
        urlDoPost: '',
      }],
      valorNome: '',
      valorUrlDoPerfil: '',
      valorUrlDoPost: '',
    }
  }

  adicionarPost = () => {
    console.log('Adicionando post: ', this.state.valorNome, this.state.valorUrlDoPerfil, this.state.valorUrlDoPost)
    const novoPost = {
      seuNome: this.state.valorNome,
      urlDoPerfil: this.state.valorUrlDoPerfil,
      urlDoPost: this.state.valorUrlDoPost
    }

    const copiaListaDePost = [...this.state.listaDePosts, novoPost]

    this.setState ({
      listaDePosts: copiaListaDePost,
      valorNome: '',
      valorUrlDoPerfil: '',
      valorUrlDoPost: ''
    })
  }

  onChangeTextoDoNome = (event) => {
    this.setState({valorNome: event.target.value})
  }

  onChangeTextoDoPerfil = (event) => {
    this.setState({valorUrlDoPerfil: event.target.value})
  }

  onChangeTextoDoPost = (event) => {
    this.setState({valorUrlDoPost: event.target.value})
  }



  render () { 
    let todosOsPosts = this.state.listaDePosts.map((item, index) => {
      return <Post key={index} seuNome={item.seuNome} urlDoPost={item.urlDoPost} urlDoPerfil={item.urlDoPerfil} />
    })

    return (
    <Body>
      <Form>
        <input 
          type="text" 
          placeholder="Seu nome"
          value={this.state.valorNome}
          onChange={this.onChangeTextoDoNome} 
        />
        <input 
          type="text" 
          placeholder="Link da sua foto de perfil"
          value={this.state.valorUrlDoPerfil}
          onChange={this.onChangeTextoDoPerfil} 
        />
        <input 
          type="text" 
          placeholder="Link da postagem"
          value={this.state.valorUrlDoPost}
          onChange={this.onChangeTextoDoPost} 
        />
        <button onClick={this.adicionarPost}>Adicionar Post</button>
      </Form>
      <Feed>
        {todosOsPosts}
      </Feed>
    </Body>
    );
  }
}
  

export default App;
