const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100,
    },
    description: {
        type: String,
        maxlength: 300,
    },
    fish: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    location: {
        name: {
            type: String,
        },
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    },
    image: {
        type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
} , {timestamps: true});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;