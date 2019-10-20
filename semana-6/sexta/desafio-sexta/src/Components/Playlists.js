import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ChangeButton } from './ChangeButton';

const PlaylistContainer = styled.div `
    display:flex;
    flex-direction: column;
`

const ListaDePlaylistis = styled.ul`
`

const Playlist = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3px;
    height: 20px;
`

const PlaylistButton = styled.p `
    background-color: blue;
    width: 100%;
`

const DeleteButton = styled.p `
    color: red;
    background-color: white;
`

export class Playlists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            errorMessage: '',
        }
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get(
            'https://us-central1-spotif4.cloudfunctions.net/api/playlists/getAllPlaylists',
            {
                headers: {
                    auth: '8dd1b538c4caee7ad4c6021c21eb1957'
                }
            }
        ).then (response => {
            console.log(response)
            this.setState({playlists: response.data.result.list});
        }).catch(error => {
            console.log(error);
            this.setState({errorMessage: "Ocorreu um erro!"});
        })
    }


    onDeletePlaylist = (id) => {
        const confirmacao = window.confirm ("Tem certeza que quer deletar essa playlist?")
        console.log(confirmacao)

        if (confirmacao === true) {
            axios.delete(`https://us-central1-spotif4.cloudfunctions.net/api/playlists/deletePlaylist?playlistId=${id}`,
            {
                headers: {
                    auth: '8dd1b538c4caee7ad4c6021c21eb1957' 
                }
            })
            this.getAllPlaylists()
            window.alert("A playlist foi eliminada com sucesso")
        } else {
            window.alert("A playlist não foi deletada!")
        }
    }

    

    render () {
        const rendedPlaylists = this.state.playlists.map((playlist, index) => {
            return (
                <Playlist key={index}>
                    <PlaylistButton>{playlist.name}</PlaylistButton>
                    <DeleteButton onClick={() => {this.onDeletePlaylist(playlist.id)}}>X</DeleteButton>
                </Playlist>
            )
        }) 

        return (
            <PlaylistContainer>
                <h3>Playlists Cadastradas</h3>
                <ListaDePlaylistis>
                    {rendedPlaylists}
                </ListaDePlaylistis>
                <ChangeButton 
                    onClickTrocarTela={this.props.onClickTrocarTela}
                    buttonText={this.props.buttonText}>
                </ChangeButton>
            </PlaylistContainer>
        )
    }
}