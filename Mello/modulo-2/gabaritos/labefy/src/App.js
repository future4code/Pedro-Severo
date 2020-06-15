import React from 'react';
import styled from "styled-components";
import PlaylistCreationPage from './containers/PlaylistCreationPage';
import PlaylistsPage from './containers/PlaylistsPage';
import PlaylistDetailPage from './containers/PlaylistDetailPage';
import Header from './components/Header';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

class App extends React.Component {
  state = {
    currentPage: "playlistCreationPage"
  }

  changePage = (currentPage) => {
    this.setState({currentPage: currentPage})
  }

  render () {
    const currentPage = () => {
      if (this.state.currentPage === "playlistCreationPage") {
        return <PlaylistCreationPage />
      } else if (this.state.currentPage === "playlistsPage") {
        return <PlaylistsPage />
      }
    }

    return (
      <AppContainer>
        <Header 
          changePage={this.changePage}
        />
        {currentPage()}
      </AppContainer>
    );
  }
}

export default App;
