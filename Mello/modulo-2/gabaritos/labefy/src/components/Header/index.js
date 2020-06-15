import React from 'react';
import { HeaderContainer, ButtonContainers } from "./styled"


class Header extends React.Component {

  render () {
    return (
      <HeaderContainer>
        <div>
            Labefy
        </div>
        <ButtonContainers>
            <button onClick={() => this.props.changePage("playlistCreationPage")} >Cadastrar Playlist</button>
            <button onClick={() => this.props.changePage("playlistsPage")} >Vizualizar Playlists</button>
        </ButtonContainers>
      </HeaderContainer>
    );
  }
}

export default Header;