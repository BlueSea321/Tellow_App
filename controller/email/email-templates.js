const {
    BASIC_SERVER_URL
} = require('../../config')

module.exports = {
    confirm: id => ({
        subject: 'Confirm Email',
        html: `
            <a href='${BASIC_SERVER_URL}/auth/signup/confirm/${id}'>
                click to confirm email
            </a>
        `,
        text: `Copy and paste this link: ${BASIC_SERVER_URL}/auth/signup/confirm/${id}`
    })
}