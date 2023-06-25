const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
      username: {
       type: String,
      unique: true,
      require: true,
      trimmed: true
      },
       email:
      { type: String,
        require: true,
        unique: true,
        match: [/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 'Please fill a valid email address']

      },
      thoughts:[
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      friends:[
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
    {
      // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
      // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
      toJSON: {
        virtuals: true,
      },
      id: false,
    }
  );
  
  // Create a virtual property `fullName` that gets and sets the user's full name
  userSchema
    .virtual('friendCount')
    .get(function () {
      return this.friends.length;
    })
    

module.exports = User;