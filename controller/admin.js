const Users = require("../models/users");
const PhoneNumberInfo = require("../models/numberInfo");
const Comments = require("../models/comments");

const changeScore = (prevScore, removedScore, commentCount) => {
  const newScore = Math.floor(
    (prevScore * commentCount - removedScore) / (commentCount - 1)
  );
  return newScore;
};

const changePhoneInfo = async (commentInfo) => {
  const number = commentInfo.number;
  const score = commentInfo.score;

  const phoneInfo = await PhoneNumberInfo.findOne({ number: number });
  phoneInfo.score = changeScore(phoneInfo.score, score, phoneInfo.comments);
  phoneInfo.comments = phoneInfo.comments - 1;
};

const getTotalStatus = async (req, res) => {
  const users = await Users.find({ role: 'user' })
  const activeUsers = users.filter(user => user.isActive)
  const passiveUsers = users.filter(user => !user.isActive)

  const phones = await PhoneNumberInfo.find()
  const comments = await Comments.find()

  return res.send({
    total: users.length,
    active: activeUsers.length,
    passive: passiveUsers.length,
    totalPhones: phones.length,
    totalComments: comments.length
  })
}

const getAllUserData = async (req, res) => {
  const users = await Users.find({ role: "user" });

  return res.send({
    data: users,
  });
};

const getAllCommentData = async (req, res) => {
  const comments = await Comments.find();

  return res.send({
    data: comments,
  });
};

const getAllPhoneData = async (req, res) => {
  const phoneData = await PhoneNumberInfo.find();

  return res.send({
    data: phoneData,
  });
};

const activeUser = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);
  if (!user) {
    return res.status(404).send({
      message: `user with ID: ${id} does not exist in database.`,
    });
  }

  user.isSuspend = false;
  await user.save();

  const newUsers = await Users.find({ role: "user" });
  return res.send({
    status: "ok",
    data: newUsers,
  });
};

const suspendUser = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);
  if (!user) {
    return res.status(404).send({
      message: `user with ID: ${id} does not exist in database.`,
    });
  }

  user.isSuspend = true;
  await user.save();

  const newUsers = await Users.find({ role: "user" });
  return res.send({
    status: "ok",
    data: newUsers,
  });
};

const removeUser = async (req, res) => {
  const { id } = req.params;

  await Users.deleteOne({ _id: id });

  const newUsers = await Users.find({ role: "user" });
  return res.send({
    status: "ok",
    data: newUsers,
  });
};

const removeComment = async (req, res) => {
  const { id } = req.params;

  const commentInfo = await Comments.findById(id);
  await changePhoneInfo(commentInfo);

  await Comments.deleteOne({ _id: id });
  const commentData = await Comments.find();
  return res.send({
    status: "ok",
    data: commentData,
  });
};

module.exports = {
  getAllUserData,
  activeUser,
  suspendUser,
  removeUser,
  getAllPhoneData,
  getAllCommentData,
  removeComment,
  getTotalStatus
};
