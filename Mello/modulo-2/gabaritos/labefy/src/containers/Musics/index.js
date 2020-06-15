import React from 'react';
import axios from "axios";
import styled from "styled-components";
import MusicCard from "../../components/MusicCard";
import { axiosConfig, baseUrl } from '../../constants';

const MusicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Musics extends React.Component {
    removeTrackFromPlaylist = (musicId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${musicId}`, axiosConfig).then(() => {
            this.props.fetchMusics()
        }).catch(err => {
            console.log(err)
        });
    };

    render () {
        const musics = this.props.musics.map(music => {
            return <MusicCard 
                key={music.id}
                musicName={music.name}
                artist={music.artist}
                url={music.url}
                musicId={music.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        });

        return (
            <MusicsContainer>
                {musics}
            </MusicsContainer>
        );
    };
};

export default Musics;