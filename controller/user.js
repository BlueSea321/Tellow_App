const axios = require('axios')
const Comments = require("../models/comments");
const PhoneNumberInfo = require("../models/numberInfo");

const markScore = (prevScore, newScore) => {
  const score = Math.floor((prevScore + newScore) / 2);
  return score;
};

const getTellowsData = (req, res) => {
  const url =
  "https://www.tellows.de/stats/partnerscoredata?apikeyMd5=399a147c51f6942600fa41412f2678d1&country=it&lang=en&json=1&showdeeplink=1&showcallertypeid=1&showcallername=1&showprefixname=1&showlastcomment=1";
  
  axios.get(url)
    .then((response) => {
      return res.json({ status: 'ok', data: response.data })
    })
    .catch((err) => res.json({ status: 'err', err: err.message }))
}

const phoneCheck = (req, res) => {
  const { number } = req.params
  axios(
    `https://lookups.twilio.com/v1/PhoneNumbers/${number}`,
    {
      auth: {
        username: "AC4468ea80e5a52af553e9fb02ee225de1",
        password: "b4232d0ecaa5bd5c20072c1145db20c3",
      },
    },
    {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        withCredentials: true,
        credentials: 'same-origin',
      }
  ) .then((response) => res.json({ status: 'ok', data: response.data }))
    .catch((err) => res.json({ status: 'err', err: err.message }))
}

const getPhoneCommentData = async (req, res) => {
  const { phoneNumber } = req.params;
  
  const commentInfo = await Comments.find();
  const properComment = commentInfo.filter((info) =>
    info.number.includes(phoneNumber)
  );

  if (properComment.length > 0) {
    return res.send({
      status: "ok",
      data: properComment
    })
  } else {
    return res.send({
      status: "not_exist"
    })
  }

}

const getCommentData = async (req, res) => {
  const { userid } = req.params;
  const comments = await Comments.find({ userid: userid });
  if (comments.length > 0) {
    return res.send({
      status: "ok",
      data: comments,
    });
  } else {
    return res.send({
      status: "not_exist",
    });
  }
};

const getPhoneNumberInfo = async (req, res) => {
  const { phonenumber } = req.params;
  const phoneInfo = await PhoneNumberInfo.find();
  const properInfo = phoneInfo.filter((info) =>
    info.number.includes(phonenumber)
  );
  if (properInfo.length > 0) {
    return res.send({
      status: "exist",
      data: properInfo,
    });
  } else {
    return res.send({
      status: "not_exist",
    });
  }
};

const getUnwantedNumbers = async (req, res) => {
  const query = {};
  const sort = { score: -1 };
  const limit = 5;
  const unwantedNumbers = await Comments.find(query).sort(sort).limit(limit);
  return res.send({
    status: "ok",
    data: unwantedNumbers,
  });
};

const getRecentNumbers = async (req, res) => {
  const query = {};
  const sort = { createdDate: -1 };
  const limit = 5;
  const recentNumbers = await Comments.find(query).sort(sort).limit(limit);
  return res.send({
    status: "ok",
    data: recentNumbers,
  });
};

const createPhoneNumberInfo = async (req, res) => {
  const {
    number,
    score,
    callername,
    callertype,
    callertypeid,
    prefix,
    prefixname,
    comments,
    lastcomment,
  } = req.body;

  const oldInfo = await PhoneNumberInfo.find({ number: number });

  if (oldInfo.length > 0) {
    res.send({
      status: "exist",
      data: oldInfo[0],
    });
  } else {
    const phoneNumberInfo = new PhoneNumberInfo({
      number: number,
      score: score,
      callername: callername,
      callertype: callertype,
      callertypeid: callertypeid,
      prefix: prefix,
      prefixname: prefixname,
      comments: comments,
      lastcomment,
    });

    const savedInfo = await phoneNumberInfo.save();
    res.send({
      status: "ok",
      data: savedInfo,
    });
  }
};

const createComment = async (req, res) => {
  const {
    number,
    score,
    callername,
    callertype,
    callertypeid,
    userid,
    username,
    content,
  } = req.body;

  const updatePhoneInfo = await PhoneNumberInfo.findOne({ number: number });

  updatePhoneInfo.score = markScore(
    parseInt(score),
    parseInt(updatePhoneInfo.score)
  );
  updatePhoneInfo.callername = callername;
  updatePhoneInfo.callertype = callertype;
  updatePhoneInfo.callertypeid = callertypeid;
  updatePhoneInfo.comments = parseInt(updatePhoneInfo.comments) + 1;
  updatePhoneInfo.lastcomment = Date.now();

  const updatedPhoneInfo = await updatePhoneInfo.save();

  const comment = new Comments({
    number: number,
    score: score,
    callername: callername,
    callertype: callertype,
    callertypeid: callertypeid,
    userid: userid,
    username: username,
    content: content,
  });

  await comment.save();

  const commentData = await Comments.find({ number: number })
  res.send({
    status: "ok",
    phoneInfo: updatedPhoneInfo,
    commentInfo: commentData,
  });
};

const updateComment = async (req, res) => {
  const {
    id,
    score,
    callername,
    callertype,
    callertypeid,
    userid,
    username,
    content
  } = req.body;

  const comment = await Comments.findById(id)

  comment.score = score;
  comment.callername = callername;
  comment.callertype = callertype;
  comment.callertypeid = callertypeid;
  comment.username = username;
  comment.content = content;
  comment.createdDate = Date.now();

  await comment.save()

  const updatedComments = await Comments.find({ userid: userid })

  return res.send({
    status: 'ok',
    data: updatedComments
  })
}

const removeComment = async (req, res) => {
  const { id, userid } = req.params;
  await Comments.deleteOne({ _id: id })

  const newComments = await Comments.find({ userid: userid })
  return res.send({
    status: 'ok',
    data: newComments
  })
}

module.exports = {
  createComment,
  updateComment,
  removeComment,
  getCommentData,
  getUnwantedNumbers,
  getRecentNumbers,
  getPhoneNumberInfo,
  createPhoneNumberInfo,
  getTellowsData,
  phoneCheck,
  getPhoneCommentData
};
