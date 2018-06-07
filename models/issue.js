var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var issueSchema = new Schema({
    title: String,
    description: String,
    storyPoint: Number,
    type: String,
    stage: String,
});

module.exports = mongoose.model('issues', issueSchema);
