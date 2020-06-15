import React from 'react';
import styled from 'styled-components';

const MusicCardContainer = styled.div`
    display: flex;
    align-items: center;
`

const MusicNameContainer = styled.h3`
    margin: 5px;
`

const ArtistContainer = styled.p`
    margin-right: 5px;
`

const DeleteButtonContainer = styled.p`
    color: red;
`

const MusicCard = (props) => {
    return (
        <MusicCardContainer>
            <MusicNameContainer>{props.musicName} - </MusicNameContainer>
            <ArtistContainer>{props.artist}</ArtistContainer>
            <audio controls="controls">
                <source src={props.url} type="audio/mpeg"/>
            </audio>
            <DeleteButtonContainer 
                onClick={() => props.removeTrackFromPlaylist(props.musicId)}
            >
                X
            </DeleteButtonContainer>
        </MusicCardContainer>
    )
}

export default MusicCard