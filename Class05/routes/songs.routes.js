import {Router} from 'express';
import SongsController from '../controllers/songs.controller.js';

const router = Router();

router.get('/:id?', SongsController.getAllSongs )
router.post('/', SongsController.addNewSong)

export default router;