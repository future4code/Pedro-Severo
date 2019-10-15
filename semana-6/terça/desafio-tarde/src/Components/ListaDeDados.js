import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ChangeButton } from './ChangeButton';

const DataListContainer = styled.section `
    display:flex;
    flex-direction: column;
`

const ListaDeUsuarios = styled.ul `
`

const Usuario = styled.li `
    display: flex;
    align-items: center;
    justify-content: space-between;
`


export class DataList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <DataListContainer>
                <h3>Usuários cadastrados</h3>
                <ListaDeUsuarios>
                    <Usuario>
                        <li>Pedro Severo</li>
                        <p>X</p>
                    </Usuario>
                    <Usuario>
                        <li>Pedro Severo</li>
                        <p>X</p>
                    </Usuario>
                </ListaDeUsuarios>
                <ChangeButton onClickTrocarTela={this.props.onClickTrocarTela}></ChangeButton>
            </DataListContainer>
        );
    }
}