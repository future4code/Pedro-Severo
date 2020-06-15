import React from 'react';
import styled from 'styled-components';

const PlaylistCardContainer = styled.div`
    display: flex;
    align-items: center;
`

const PlaylistNameContainer = styled.h4`
    margin: 5px;
`

const DeleteButtonContainer = styled.p`
    color: red;
`

const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <button 
                onClick={() => props.changePage("playlistDetailPage", props.playlistId)} 
            >
                Abrir Playlist
            </button>
            <PlaylistNameContainer>{props.playlist}</PlaylistNameContainer>
            <DeleteButtonContainer 
                onClick={() => props.handlePlaylistDeletion(props.playlistId)}
            >
                X
            </DeleteButtonContainer>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard