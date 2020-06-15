import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from '../../constants';

const PlaylistCreationPageContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PlaylistCreationForm = styled.form`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

class PlaylistCreationPage extends React.Component {
    state = {
        playlistNameValue: ""
    };

    changePlaylistNameValue = (e) => {
        this.setState({playlistNameValue: e.target.value});
    };

    createPlaylist = (e) => {
        e.preventDefault();
        
        const body = {
            name: this.state.playlistNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(response => {
            alert(`Playlist criada com sucesso!`);
        }).catch(err => {
            console.log(err, "Não deu")
        });

        this.setState({playlistNameValue: ""});
    };

    render () {
        return (
            <PlaylistCreationPageContainer>
                <h1>Crie uma playlist</h1>
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                    <label >Coloque o nome da playlist</label>
                    <input 
                        type="name"
                        placeholder="Nome da Playlist" 
                        value={this.state.playlistNameValue}
                        onChange={this.changePlaylistNameValue}
                    />
                    <button type="submit">Criar playlist</button>
                </PlaylistCreationForm>
            </PlaylistCreationPageContainer>
        );
    }
}

export default PlaylistCreationPage;