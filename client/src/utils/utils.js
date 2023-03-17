import axios from 'axios'

const {
  BASIC_SERVER_URL
} = require('../config')

export const scoreImages = [
  "https://www.tellows.com/images/score/s1.jpg",
  "https://www.tellows.com/images/score/s2.jpg",
  "https://www.tellows.com/images/score/s3.jpg",
  "https://www.tellows.com/images/score/s4.jpg",
  "https://www.tellows.com/images/score/s5.jpg",
  "https://www.tellows.com/images/score/s6.jpg",
  "https://www.tellows.com/images/score/s7.jpg",
  "https://www.tellows.com/images/score/s8.jpg",
  "https://www.tellows.com/images/score/s9.jpg",
];

export const msgs = {
  confirm: "Email sent, please check your inbox to confirm",
  confirmed: "Your email is confirmed!",
  resend: "Confirmation email resent, maybe check your spam?",
  couldNotFind: "Could not find you!",
  alreadyExist: "Your email is already in use",
  alreadyConfirmed: "Your email was already confirmed",
  error: 'Error'
};

export const completedPhoneNumber = (number) => {
  const temp = "39" + number;
  return temp;
};

export const nativePhoneNumber = (completedNumber) => {
  const temp = completedNumber.toString().slice(3);
  return temp;
};

export const auth_axios = axios.create({
  baseURL: BASIC_SERVER_URL,
  headers: {
    'x-access-token': localStorage.getItem('tellows_token') || ''
  }
})
