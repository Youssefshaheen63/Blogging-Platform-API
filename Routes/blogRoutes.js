const express = require('express');
const blogController = require('../Controller/blogController');
const router = express.Router();

router.route('/').post(blogController.postCreate).get(blogController.getAllPosts);

router.route('/:id').patch(blogController.postUpdate).get(blogController.getOnePost).delete(blogController.postDelete);

module.exports = router;
