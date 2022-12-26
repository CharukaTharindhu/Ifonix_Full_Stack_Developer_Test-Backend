const commentModal = require('../modals/Comment');

const getAllCommentAccPost = async (req, res) => {
  try {
    const postId_ = req.params.id;
    const posts = await commentModal.find({ postId: postId_ });
    res.send(posts);
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await commentModal.create(req.body);
    if (newComment) {
      res.send(newComment);
    } else {
      res.send('No comment created');
    }
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

module.exports = { createComment, getAllCommentAccPost };
