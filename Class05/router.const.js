import {Router} from "express";
import artistRoutes from './routes/artist.routes.js'
import songsRoutes from './routes/songs.routes.js'

const router = Router();

// courses routes
router.use('/artists', artistRoutes)
//student routes
router.use('/songs', songsRoutes) 

export default router;