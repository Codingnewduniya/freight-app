const express = require("express");
const app = express();
const auth = require("./auth");

app.use(express.json());
app.use(express.static("public"));

app.post("/api/register", auth.register);
app.post("/api/verify-otp", auth.verifyOtp);
app.post("/api/login", auth.login);

app.listen(3000, () => {
  console.log("🚚 Running on http://localhost:3000");
});
