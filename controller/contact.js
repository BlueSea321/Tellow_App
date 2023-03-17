const nodemailer = require("nodemailer");
const { SMTP_HOST, SMTP_MAIL, SMTP_PASS, ADMIN_MAIL } = require("../config");

const contactEmail = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
});

const sendProblem = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mail = {
    from: name,
    to: ADMIN_MAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
};

const reportBug = async (req, res) => {
  const { name, email, detail, message } = req.body;

  const mail = {
    from: name,
    to: ADMIN_MAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Detail: ${detail}</p>
            <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
};

const sendCooperation = async (req, res) => {
    const { name, email, message } = req.body
    console.log('df', req.body)

    return res.json({ status: "ERROR" })
}

const removeAccount = async (req, res) => {
  const { name, email, registerEmail, registerPlace, message } = req.body;

  const mail = {
    from: name,
    to: ADMIN_MAIL,
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>registerEmail: ${registerEmail}</p>
            <p>registerPlace: ${registerPlace}</P>
            <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
};

module.exports = {
  sendProblem,
  reportBug,
  removeAccount,
  sendCooperation
};
