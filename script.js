let loggedIn = false;

function showForm(type) {
  document.getElementById(type + "Form").style.display = "block";
}

function closeForm() {
  document.querySelectorAll(".modal").forEach(m => m.style.display = "none");
}

function login() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  if (user && pass) {
    loggedIn = true;
    alert("Bienvenue " + user);
    closeForm();
  } else {
    alert("Veuillez remplir tous les champs !");
  }
}

function register() {
  alert("Inscription réussie ! Vous pouvez vous connecter maintenant.");
  closeForm();
}

function requireLogin(page) {
  if (!loggedIn) {
    alert("Vous devez vous connecter pour accéder à cette section !");
    return;
  }
  openPage(page);
}

function openPage(page) {
  window.location.href = page;
          }
