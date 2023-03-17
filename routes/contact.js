const router = require("express").Router();

const {
    sendProblem,
    reportBug,
    removeAccount,
    sendCooperation
} = require('../controller/contact')

router.post("/sendProblem", sendProblem);
router.post("/reportBug", reportBug);
router.post("/removeAccount", removeAccount)
router.post("/sendCooperation", sendCooperation)

module.exports = router;
