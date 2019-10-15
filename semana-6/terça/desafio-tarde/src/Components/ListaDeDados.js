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
            listaDeUsuarios: [],
            errorMessage: '',
        }
    }

    componentDidMount () {
        // this.getAllUsers()
    }

    // Essa função não está funcionando, muito provavelmente
    // por que eu ainda não criei a função de adicionar novo usuário.
    // Portanto, voltar nela depois que a função de criar novo usuário
    // estiver criada.

    // getAllUsers = () => {
    //     const request = axios.get (
    //         'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers',
    //         {
    //             headers: {
    //                 auth: '8dd1b538c4caee7ad4c6021c21eb1957'
    //             }
    //         }
    //     );

    //     request
    //         .then (response => {
    //             console.log(response);
    //             this.setState({listaDeUsuarios: response});
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             this.setState({
    //                 errorMessage: "Ocorreu um erro!"
    //             });
    //         });
    // };


    render () {
        return (
            <DataListContainer>
                <h3>Usuários cadastrados</h3>
                <ListaDeUsuarios>
                    <Usuario>
                        <p>Pedro Severo</p>
                        <p>X</p>
                    </Usuario>
                    <Usuario>
                        <p>Pedro Severo</p>
                        <p>X</p>
                    </Usuario>
                </ListaDeUsuarios>
                <ChangeButton onClickTrocarTela={this.props.onClickTrocarTela}></ChangeButton>
            </DataListContainer>
        );
    }
}