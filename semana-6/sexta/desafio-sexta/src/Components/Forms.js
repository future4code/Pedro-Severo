import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ChangeButton } from './ChangeButton';

const FormContainer = styled.section`
    width: 20vw;
    height: 50vh;
    border: solid;
    border-width: 1px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items:center;
    text-align: center;
    justify-content: space-around;
`

const Input = styled.input `
`

export class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            playlistValue: '',
        }
    }

    onChangePlaylistValue = (event) => {
        this.setState({playlistValue: event.target.value})
    }

    addNewPlaylist = () => {
        const newPlaylist = {
            name: this.state.playlistValue
        }

        axios.
            post (
                'https://us-central1-spotif4.cloudfunctions.net/api/playlists/createPlaylist',
                newPlaylist, 
                {
                    headers: {
                        auth: "8dd1b538c4caee7ad4c6021c21eb1957"
                    }
                }
            ).then(response => {
                window.alert("Playlist cadastrada com sucesso!")
                console.log(response)
            }).catch(error => {
                window.alert('Não foi possível cadastrar essa playlist.')
            })
    }



    render () {
        return (
            <FormContainer>
                <h4>Nome da Playlist:</h4>
                <Input 
                    type="text"  
                    onChange={this.onChangePlaylistValue} 
                    value={this.playlistValue}>
                </Input>
                <button onClick={this.addNewPlaylist}>
                    Salvar Playlist
                </button>
                <ChangeButton 
                    onClickTrocarTela={this.props.onClickTrocarTela}
                    buttonText={this.props.buttonText}>
                </ChangeButton>
            </FormContainer>
        )
    }
}