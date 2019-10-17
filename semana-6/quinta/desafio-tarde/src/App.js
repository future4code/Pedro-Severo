import React from 'react';
import styled from 'styled-components';
import { FormBored } from './Components/FormBored';


const Body = styled.div `
`



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render () {
    return (
      <Body>
        <FormBored></FormBored>
      </Body>
    );
  }
}

export default App;
