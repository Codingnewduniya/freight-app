const bcrypt = require("bcrypt");
const { sendOTP } = require("./mailer");

let users = {};        // email → user
let otpStore = {};    // email → otp

// REGISTER
exports.register = async (req, res) => {
  const { company, email, password } = req.body;

  if (users[email]) {
    return res.json({ error: "User already exists" });
  }

  const hash = await bcrypt.hash(password, 10);
  const otp = Math.floor(100000 + Math.random() * 900000);

  users[email] = { company, email, password: hash, verified: false };
  otpStore[email] = otp;

  await sendOTP(email, otp);

  res.json({ success: true });
};

// VERIFY OTP
exports.verifyOtp = (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] == otp) {
    users[email].verified = true;
    delete otpStore[email];
    return res.json({ success: true });
  }

  res.json({ error: "Invalid OTP" });
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = users[email];

  if (!user || !user.verified) {
    return res.json({ error: "User not verified" });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ error: "Invalid credentials" });

  res.json({ success: true, company: user.company });
};
