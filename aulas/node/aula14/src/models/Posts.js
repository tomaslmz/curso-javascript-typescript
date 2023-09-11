const mongoose = require('mongoose');

const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String
});

const PostsModel = mongoose.model('Posts', PostsSchema);