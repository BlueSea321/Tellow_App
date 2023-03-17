const router = require("express").Router();

const {
  login,
  wakeUp,
  signUp,
  emailConfirm,
  getUserData,
  resendEmail,
} = require("../controller/auth");

router.post("/login", login);
router.post("/signup", signUp);
router.post("/resendEmail", resendEmail);

router.get("/wake-up", wakeUp);
router.get("/getUserData/:id", getUserData);
router.get("/signup/confirm/:id", emailConfirm);

module.exports = router;
