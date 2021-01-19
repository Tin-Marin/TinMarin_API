const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExhibitionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    rating: Number,
    sponsorName: [{
        type: String,
        default: ""
    }],
    sponsorLogo: [String],
    educationArea: [String],
    minimumAge: {
        type: Number,
        default: 0
    },
    maximumAge: {
        type: Number,
        default: 17
    },
    duration: Number,
    capacity: Number,
    curiousInfo: {
        type: String,
        default: ""
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Exhibition", ExhibitionSchema);