const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playSessionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, required: true},
    time: String,
    duration: {type: Number, required: true},
    notes: String,
}, {
    timestamps: true,
});

const platformSchema = new Schema({
    id: String,
    name: String,
}, {
});

const gameSchema = new Schema({
    gameId: String,
    name: {
        type: String,
        required: true
    },
    platforms: [platformSchema],
    summary: String,
    coverImage: String,
    coverImageLarge: String,
    releaseDate: String,
    playSession: [playSessionSchema],
}, {
    timestamps: true,
});

module.exports = mongoose.model('Game', gameSchema);
