const router = require("express").Router();
const user = require("../middleware/user");

const {
  createComment,
  updateComment,
  removeComment,
  createPhoneNumberInfo,
  getCommentData,
  getUnwantedNumbers,
  getRecentNumbers,
  getPhoneNumberInfo,
  getTellowsData,
  getPhoneCommentData,
  phoneCheck,
} = require("../controller/user");

router.get("/getCommentData/:userid", user, getCommentData);
router.get("/getUnwantedNumbers", getUnwantedNumbers);
router.get("/getRecentNumbers", getRecentNumbers);
router.get("/getPhoneNumberInfo/:phonenumber", getPhoneNumberInfo);
router.get("/getTellowsData", getTellowsData);
router.get("/phoneCheck/:number", phoneCheck);
router.get("/removeComment/:id/:userid", user, removeComment)
router.get("/getPhoneCommentData/:phoneNumber", getPhoneCommentData)

router.post("/createPhoneNumberInfo", createPhoneNumberInfo);
router.post("/createComment", user, createComment);
router.post("/updateComment", user, updateComment);

module.exports = router;
