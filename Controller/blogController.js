const Blog = require('../Model/blogmodel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
exports.postCreate = catchAsync(async (req, res, next) => {
  const newBlog = await Blog.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      post: newBlog,
    },
  });
});

exports.getAllPosts = catchAsync(async (req, res, next) => {
  const term = req.query.term;
  let filterObject = {};
  if (term) {
    filterObject = {
      $or: [
        { title: { $regex: term, $options: 'i' } },
        { content: { $regex: term, $options: 'i' } },
        { category: { $regex: term, $options: 'i' } },
      ],
    };
  }
  const posts = await Blog.find(filterObject);
  res.status(200).json({
    status: 'success',
    resultes: posts.length,
    data: {
      posts,
    },
  });
});
exports.getOnePost = catchAsync(async (req, res, next) => {
  const post = await Blog.findById(req.params.id);

  if (!post) {
    return next(new AppErorr('No post found with tah ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      post,
    },
  });
});
exports.postUpdate = catchAsync(async (req, res, next) => {
  const newBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!newBlog) {
    return next(new AppErorr('No Post found with tah ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      post: newBlog,
    },
  });
});

exports.postDelete = catchAsync(async (req, res, next) => {
  const post = await Blog.findByIdAndDelete(req.params.id, req.body, { new: true, runValidators: true });
  if (!post) {
    return next(new AppError('No post found with that ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
