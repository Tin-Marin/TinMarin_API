const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    options: [{
        type: String,
        required: true
    }],
    correct_option: {
        type: String,
        required: true
    },
    exhibition: { 
        type: Schema.Types.ObjectId, 
        ref: "Exhibition",
        autopopulate: true}
});

module.exports = mongoose.model('Quiz', QuizSchema);