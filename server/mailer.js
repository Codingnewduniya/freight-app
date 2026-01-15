const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_EMAIL@gmail.com",
    pass: "YOUR_APP_PASSWORD"
  }
});

module.exports.sendOTP = async (email, otp) => {
  await transporter.sendMail({
    from: "PM Translogistics",
    to: email,
    subject: "Your OTP Verification Code",
    text: `Your OTP is: ${otp}`
  });
};
