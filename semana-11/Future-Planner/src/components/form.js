import React from "react";
import styled from "styled-components";

const FormContainer = styled.form `
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const Inputs = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`


export class Form extends React.Component {
  render() {
    return <FormContainer>
        <h3>Novo compromisso</h3>
        <Inputs>
            <input type="text" placeholder="Compromisso"/>
            <select 
                id="day" 
                // name={props.name} 
                // onChange={props.handleInputChange}
            >
                <option value="monday">Segunda-feira</option>
                <option value="tuesday">Terça-feira</option>
                <option value="wednesday">Quarta-feira</option>
                <option value="thursday">Quinta-feira</option>
                <option value="friday">Sexta-feira</option>
                <option value="saturday">Sábado</option>
                <option value="sunday">Domingo</option>
        
            </select>
        </Inputs>
        <button>Criar nova tafera</button>
    </FormContainer>;
  }
}

export default Form;