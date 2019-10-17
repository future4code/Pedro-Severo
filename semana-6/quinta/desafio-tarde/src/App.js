import React from 'react';
import styled from 'styled-components';
import { FormBored } from './Components/FormBored';
import { Activity } from './Components/Activity';

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
        <Activity></Activity>
      </Body>
    );
  }
}

export default App;
