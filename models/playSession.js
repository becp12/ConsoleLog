const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playSessionSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    date: Date,
    time: Time,
    duration: Number,
    notes: String,
}, {
    timestamps: true,
});

module.exports = mongoose.model('PlaySession', playSessionSchema);
