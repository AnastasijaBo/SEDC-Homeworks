import { Schema, model } from "mongoose";

const songSchema = new Schema({
    songName: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true
    
    }

})


const Song = model('Song', songSchema);

export default Song;