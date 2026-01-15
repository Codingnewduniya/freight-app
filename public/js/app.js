function login() {
  if (user.value && pass.value) {
    localStorage.setItem("loggedIn", "true");
    location.href = "dashboard.html";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.href = "index.html";
}

function go(page) {
  location.href = page;
}
