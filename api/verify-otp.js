export default function handler(req, res) {
  const { email, otp } = req.body;

  if (!otpStore[email] || otpStore[email].otp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  delete otpStore[email].otp;

  res.json({ message: "OTP verified" });
}
