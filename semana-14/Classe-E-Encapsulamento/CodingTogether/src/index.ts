import {Playlist} from "./Playlist";
import {JSONFileManager} from "./JSONFileManager";
import {Musica} from "./Musica";

const playlistFileManager = new JSONFileManager('playlist.json');

function criarPlaylist() {
    const musica1: Musica = new Musica('Sweet Child O Mine', 'Guns N Roses', 'Appetite for Destruction', 1987);
    const musica2: Musica = new Musica('Money', 'Pink Floyd', 'Dark Side of The Moon', 1981);

    const playlistRock: Playlist = new Playlist('Rock');
    playlistRock.adicionarMusica(musica1);
    playlistRock.adicionarMusica(musica2);

    playlistFileManager.saveToJSON(playlistRock)
}

const playlist = Playlist.GetPlaylistFromJSON(playlistFileManager.getJSONContent());

playlist.tocarPlaylist();

console.log(playlist);