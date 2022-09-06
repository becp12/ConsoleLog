const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
}, {
    timestamps: true,
});

module.exports = mongoose.model('Game', gameSchema);