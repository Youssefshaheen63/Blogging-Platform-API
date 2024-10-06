const mogoose = require('mongoose');

const blogSchema = new mogoose.Schema({
  title: {
    type: String,
    required: [true, 'A blog must have a title'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'A blog must have a content'],
  },
  category: {
    type: String,
    required: [true, 'A blog must have a category'],
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

blogSchema.pre('findOneAndUpdate', function (next) {
  // console.log(this);
  this.set({ updatedAt: Date.now() });
  next();
});
module.exports = mogoose.model('Blog', blogSchema);
