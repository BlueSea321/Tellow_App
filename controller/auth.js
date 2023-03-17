const Users = require("../models/users");
const sendEmail = require("./email/email-send");
const msgs = require("./email/email-msgs");
const templates = require("./email/email-templates");
const jwt = require('jsonwebtoken')
const { TOKEN_SECRET } = require('../config')

const wakeUp = (req, res) => {
  res.json("👌");
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email: email });

  if (user) {
    if (user.password === password) {
      if (user.isSuspend) {
        res.json({
          status: 'suspend'
        })
      } else {
        if (user.isActive) {
          const token = jwt.sign(
            {
              userid: user._id,
              username: user.username,
              email: user.email,
              isActive: user.isActive,
              isSuspend: user.isSuspend,
              role: user.role
            },
            TOKEN_SECRET,
            {
              expiresIn: "5 days"
            }
          )
          res.json({
            status: "ok",
            token: token,
            data: user
          });
        } else {
          sendEmail(user.email, templates.confirm(user._id))
            .then(() => res.json({ status: "verify", id: user._id }))
            .catch((err) => res.json({ status: "err", err: err }));
        }
      }
    } else {
      res.json({
        status: "wrong_pwd",
        data: req.body,
      });
    }
  } else {
    res.json({
      status: "not_exist",
      data: req.body,
    });
  }
};

const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  const oldUser = await Users.findOne({ email: email });

  if (!oldUser) {
    new Users({
      username: username,
      email: email,
      password: password,
      isActive: false,
      isSuspend: false,
      role: "user",
    })
      .save()
      .then((newUser) =>
        sendEmail(newUser.email, templates.confirm(newUser._id))
      )
      .then((newUser) => res.json({ msg: msgs.confirm, data: newUser }))
      .catch((err) => res.json({ msg: msgs.error, err: err }));
  } else {
    res.json({ msg: msgs.alreadyExist });
  }
};

const resendEmail = async (req, res) => {
  const userid = req.body._id;
  const { email } = req.body;

  sendEmail(email, templates.confirm(userid))
    .then(() => res.json({ msg: msgs.resend }))
    .catch((err) => res.json({ msg: msgs.error, err: err }));
};

const getUserData = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);
  if (!user) {
    return res.send({
      status: "not_exist",
    });
  } else {
    return res.send({
      status: "ok",
      data: user,
    });
  }
};

const emailConfirm = async (req, res) => {
  const { id } = req.params;

  const user = await Users.findById(id);
  if (user) {
    user.isActive = true;
    const saveduser = await user.save();
  }
};

module.exports = {
  login,
  wakeUp,
  signUp,
  emailConfirm,
  getUserData,
  resendEmail,
};
