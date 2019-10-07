import React from 'react';
import styled from 'styled-components';
import { Tarefa } from './components/Tarefa'

const Body = styled.div `

`

const ListaDeTarefas = styled.div `
`


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      listaDeTarefas: [{
        tarefa: '',
      }],
      valorTarefa: '',
    }
  }

  criarTarefa = (event) => {
    event.preventDefault()
    const novaTarefa = {
      tarefa: this.state.valorTarefa,
    }

    const copiaListaDeTarefas = [...this.state.listaDeTarefas, novaTarefa];

    this.setState ({
      listaDeTarefas: copiaListaDeTarefas,
      valorTarefa: '',
    })
  }

  onChangeValorTarefa = (event) => {
    this.setState({valorTarefa: event.target.value})
  }

  render () {
    let todasAsTarefas = this.state.listaDeTarefas.map ((item, index) => {
      return <Tarefa key={index} tarefa={item.tarefa} />
    })

  
    return (
      <Body>
        <div>
          <h3>Tarefas</h3>
          <input type="text" placeholder="Tarefa" onChange={this.onChangeValorTarefa} value={this.state.valorTarefa} />
          <button onClick={this.criarTarefa}>Criar nova tafera</button>
          <hr />
        </div>
        <ListaDeTarefas>
          {todasAsTarefas}
        </ListaDeTarefas>
      </Body>
    );
  }
}

export default App;
