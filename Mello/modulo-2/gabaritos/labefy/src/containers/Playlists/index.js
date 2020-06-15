import React from 'react';
import axios from "axios"
import styled from "styled-components";
import { baseUrl, axiosConfig } from '../../constants';
import PlaylistCard from '../../components/PlaylistCard';

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class PlaylistsPage extends React.Component {
  state = {
    playlists: []
  };

  componentDidMount = () => {
    this.fetchPlalysts();
  };

  fetchPlalysts = () => {
    axios.get(baseUrl, axiosConfig).then(response => {
      this.setState({playlists: response.data.result.list});
    }).catch(err => {
      console.log(err);
    });
  };

  handlePlaylistDeletion = (playlistId) => {
    axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(() => {
      this.fetchPlalysts()
    }).catch(err => {
      console.log(err)
    });
  };

  render () {
    const playlists = this.state.playlists.map(playlist => {
      return <PlaylistCard 
        key={playlist.id}
        playlist={playlist.name}
        playlistId={playlist.id}
        changePage={this.props.changePage}
        handlePlaylistDeletion={this.handlePlaylistDeletion}
      />
    })

    return (
      <PlaylistsContainer>
        {playlists}
      </PlaylistsContainer>
    );
  };
};

export default PlaylistsPage;