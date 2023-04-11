import SongsService from "../services/songs.service.js";

export default class SongsController {
  static async getAllSongs(req, res) {
    try {
      
        const songs = await SongsService.getAllSongs(req.query.songName);
        res.status(200).send(songs);
        } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewSong(req, res) {
    try {
      const song = await SongsService.addNewSong(req.body);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
}
