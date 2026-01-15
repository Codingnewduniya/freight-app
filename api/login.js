import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  const { email, password } = req.body;

  if (!otpStore[email]) {
    return res.status(400).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, otpStore[email].hashedPassword);

  if (!match) {
    return res.status(401).json({ message: "Wrong password" });
  }

  res.json({ message: "Login successful" });
}
