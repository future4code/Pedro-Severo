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

const DeleteButton = styled.p `
    color: red;
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
        this.getAllUsers()
    };


    getAllUsers = () => {
        const request = axios.get (
            'https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers',
            {
                headers: {
                    'api-token': '8dd1b538c4caee7ad4c6021c21eb1957'
                }
            }
        );

        request
            .then (response => {
                console.log(response)
                this.setState({listaDeUsuarios: response.data.result});
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    errorMessage: "Ocorreu um erro!"
                });
            });
    };

    onDeleteClick = (id) => {
        axios.delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
        {
            headers: {
                'api-token': '8dd1b538c4caee7ad4c6021c21eb1957' 
            }
        })

        
        this.getAllUsers()
        window.alert("O usuário foi eleiminado com sucesso")
    }



    render () {
        const todosUsuarios = this.state.listaDeUsuarios.map((user, index) => {
            return (
                <Usuario key={index}>
                    <p>{user.name}</p>
                    <DeleteButton onClick={ () => {this.onDeleteClick(user.id)}}>X</DeleteButton>
                </Usuario>
            )
        }) 

        return (
            <DataListContainer>
                <h3>Usuários cadastrados</h3>
                <ListaDeUsuarios>
                    {todosUsuarios}
                </ListaDeUsuarios>
                <ChangeButton onClickTrocarTela={this.props.onClickTrocarTela}></ChangeButton>
            </DataListContainer>
        );
    }
}