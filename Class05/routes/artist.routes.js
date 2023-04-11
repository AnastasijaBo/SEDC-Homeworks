import {Router} from 'express';
import ArtistController from '../controllers/artist.controller.js'
const router = Router();
 
router.get('/', ArtistController.getAllArtists)
router.post('/', ArtistController.addNewArtist )

export default router;