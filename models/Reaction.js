const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema to create User model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            require: true,
            maxLenght: 280,
        },
        username:
        {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get:timestamp => dateFormat (timestamp)
        },
    },
    {
        // use a fetter method of format the timestamp 
    
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;