import React from 'react';
import styled from "styled-components";
import Playlists from "../Playlists"
import PlaylistDetailPage from '../PlaylistDetailPage';

const PlaylistsPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class PlaylistsPage extends React.Component {
  state = {
    currentPage: "playlists",
    playlistId: ""
  };

  changePage = (currentPage, playlistId) => {
    this.setState({
      currentPage: currentPage,
      playlistId: playlistId
    })
  }

  render () {

    const currentPage = () => {
      if (this.state.currentPage === "playlists") {
        return <Playlists 
          changePage={this.changePage}
        />
      } else if (this.state.currentPage === "playlistDetailPage") {
        return <PlaylistDetailPage 
          changePage={this.changePage}
          playlistId={this.state.playlistId}
        />
      }
    }

    return (
      <PlaylistsPageContainer>
        {currentPage()}
      </PlaylistsPageContainer>
    );
  };
};

export default PlaylistsPage;