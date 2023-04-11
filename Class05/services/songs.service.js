import Songs from '../models/songs.model.js';
import ArtistService from '../services/artist.service.js';

export default class SongsClass {
    static async getAllSongs(songName) {
        const songs = await Songs.find({songName: songName});
    return songs;
    }
    static async addNewSong(songData) {
        
        const song = new Songs(songData);
    
      
        const response = await song.save();
    
        
        return response;
      }
}