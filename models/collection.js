const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    games: [{type: Schema.Types.ObjectId, ref: 'Game'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
})

collectionSchema.statics.addGameToCollection = async function(userId, gameId) {
    return this.findOneAndUpdate(
        // query
        { user: userId },
        // update - in the case the collection is upserted
        { user: userId, "$addToSet": { "games":gameId } },
        // upsert option creates the doc if it doesn't exist!
        { upsert: true, new: true }
    )
    .populate('games');
}

module.exports = mongoose.model('Collection', collectionSchema);