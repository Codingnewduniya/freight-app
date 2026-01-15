let tempEmail = "";

function show(id) {
  register.style.display = "none";
  login.style.display = "none";
  otp.style.display = "none";
  document.getElementById(id).style.display = "block";
}

async function register() {
  tempEmail = regEmail.value;

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      company: company.value,
      email: regEmail.value,
      password: regPass.value
    })
  });

  const data = await res.json();
  if (data.success) {
    msg.innerText = "OTP sent to email";
    show("otp");
  } else {
    msg.innerText = data.error;
  }
}

async function verifyOtp() {
  const res = await fetch("/api/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: tempEmail,
      otp: otpInput.value
    })
  });

  const data = await res.json();
  if (data.success) {
    location.href = "dashboard.html";
  } else {
    msg.innerText = data.error;
  }
}

async function login() {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPass.value
    })
  });

  const data = await res.json();
  if (data.success) {
    location.href = "dashboard.html";
  } else {
    msg.innerText = data.error;
  }
}
