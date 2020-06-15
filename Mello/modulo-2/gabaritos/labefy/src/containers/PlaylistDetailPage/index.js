import React from 'react';
import styled from "styled-components";
import Musics from '../Musics';
import axios from "axios";
import { axiosConfig, baseUrl } from '../../constants';

const PlaylistDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MusicCreationForm = styled.form`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom-style: dotted;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


class PlaylistDetailPage extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
    musics: []
  }

  componentDidMount = () => {
    this.fetchMusics();
  };

  fetchMusics = () => {
      axios.get(`${baseUrl}/${this.props.playlistId}/tracks`,
          axiosConfig
      ).then(response => {
          this.setState({musics: response.data.result.tracks});
      }).catch(err => {
          console.log(err);
      });
  };

  changeInputValues = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addTrackToPlaylist = (e) => {
    e.preventDefault()
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url
    }

    axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, 
      body,
      axiosConfig
    ).then(() => {
      this.fetchMusics()
    }).catch(err => {
      console.log(err)
    });

    this.setState({
      name: "",
      artist: "",
      url: ""
    })
  };

  render () {
    return (
      <PlaylistDetailPageContainer>
        <MusicCreationForm onSubmit={this.addTrackToPlaylist} >
          <div>
            <label>Nome da música</label>
            <input 
              value={this.state.name}
              name="name"
              onChange={this.changeInputValues}
              placeholder="Nome da Música" 
            />
          </div>
          <div>
            <label>Artista</label>
            <input 
              placeholder="Artista" 
              name="artist"
              value={this.state.artist}
              onChange={this.changeInputValues}
            />
          </div>
          <div>
          <label>Link da Música</label>
          <input 
            placeholder="Link da Música"
            name="url"
            value={this.state.url}
            onChange={this.changeInputValues}
          />
          </div>
          <button type="submit">Adicionar</button>
        </MusicCreationForm>
        <Musics 
          playlistId={this.props.playlistId}
          fetchMusics={this.fetchMusics}
          musics={this.state.musics}
        />
        <div>
          <button onClick={() => this.props.changePage("playlists", "")}>Sair dessa playlist</button>
        </div>
      </PlaylistDetailPageContainer>
    );
  }
}

export default PlaylistDetailPage;