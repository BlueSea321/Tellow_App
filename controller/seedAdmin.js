const Users = require("../models/users");
const { ADMIN_MAIL, ADMIN_PASS } = require("../config");

const admin = new Users({
  username: "admin",
  email: ADMIN_MAIL,
  password: ADMIN_PASS,
  isActive: true,
  isSuspend: false,
  role: "admin",
});

const seedData = async () => {
  const oldAdmin = await Users.findOne({ role: "admin" });
  if (!oldAdmin) {
    await admin.save();
  }
};

module.exports = {
  seedData,
};
