const nodemailer = require('nodemailer')
const {
    SMTP_HOST,
    SMTP_MAIL,
    SMTP_PASS
} = require('../../config')

const credentials = {
    host: SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASS
    }
}

const transporter = nodemailer.createTransport(credentials)

module.exports = async (to, content) => {
    const contacts = {
        from: SMTP_MAIL,
        to
    }
    const email = Object.assign({}, content, contacts)

    await transporter.sendMail(email)
}