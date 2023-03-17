const router = require("express").Router();
const admin = require('../middleware/admin')

const {
    getAllUserData,
    activeUser,
    suspendUser,
    removeUser,
    getAllPhoneData,
    getAllCommentData,
    removeComment,
    getTotalStatus
} = require('../controller/admin')

router.get('/getAllUserData', admin, getAllUserData)
router.get('/activeUser/:id', admin, activeUser)
router.get('/suspendUser/:id', admin, suspendUser)
router.get('/removeUser/:id', admin, removeUser)
router.get('/getAllPhoneData', admin, getAllPhoneData)
router.get('/getAllCommentData', admin, getAllCommentData)
router.get('/removeComment/:id', admin, removeComment)
router.get('/getTotalStatus', admin, getTotalStatus)

module.exports = router;