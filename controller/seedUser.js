const Users = require('../models/users')

const user = new Users({
    username: 'user1',
    email: 'smiledev1202@outlook.com',
    password: 'star123!@#',
    isActive: true,
    isSuspend: false,
    role: 'user'
})

const seedUser = async () => {
    const oldUser = await Users.findOne({ email: 'smiledev1202@outlook.com' })
    if (!oldUser) {
        await user.save()
    }
}

module.exports = {
    seedUser
}