const postModal = require('../modals/Post');
const userModal = require('../modals/UserModal');
const status = {
  APPROVED: 'approved',
  RJECTED: 'rejected',
  EMPTY: '',
};

//:ADMIN PRIVEW API
const getAllPost = async (req, res) => {
  try {
    const posts = await postModal.find();
    res.send(posts);
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

const getAllApprovedPosts = async (req, res) => {
  try {
    const ApprovedPosts = await postModal.find({ IsAdminApproved: true });
    res.send(ApprovedPosts);
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};
//:ADMIN PRIVEW API
const approvedRejectPost = async (req, res) => {
  try {
    const isApproved = req.body.IsAdminApproved;
    const feedbackIfrejected = !isApproved
      ? req.body.Rejectedfeedback
      : status.EMPTY;
    const IsRejected = !isApproved ? true : false;
    const postId = req.params.id;

    const updatePostApprovement = await postModal.findByIdAndUpdate(postId, {
      $set: {
        IsAdminApproved: isApproved,
        Rejectedfeedback: feedbackIfrejected,
        IsRejected: IsRejected,
      },
    });
    res.send(updatePostApprovement);
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

const createPost = async (req, res) => {
  try {
    req.body.createdDate = Date.now();
    const createUser = req.body.createdBy;

    const payload = {
      title: req.body.title,
      description: req.body.description,
      createdBy: createUser,
      createdDate: req.body.createdDate,
      IsAdminApproved: false,
    };

    //check user role
    const user = await userModal.findOne({ email: createUser });
    if (user.role == 'admin') {
      payload.IsAdminApproved = true;
    }
    const newPost = await postModal.create(payload);
    if (newPost) {
      res.send(newPost);
    } else {
      res.send('No post created');
    }
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletePost = await postModal.findByIdAndRemove(postId);
    if (deletePost._id) {
      res.send(deletePost);
    } else {
      res.send('No post Deleted');
    }
  } catch (err) {
    res.send({ 'Server Error': err });
  }
};

module.exports = {
  getAllPost,
  getAllApprovedPosts,
  createPost,
  deletePost,
  approvedRejectPost,
};
