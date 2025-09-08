// 📱 TheraQuiz – app.js

let deferredPrompt;

// Écouter l'événement beforeinstallprompt
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.style.display = "inline-block";
});

// Bouton installer
document.getElementById("installBtn")?.addEventListener("click", async () => {
  if (!deferredPrompt) {
    alert("ℹ️ L'application est prête – utilisez 'Ajouter à l'écran d'accueil' du navigateur.");
    return;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === "accepted") {
    alert("✅ Application installée ! Vous la trouverez sur votre écran d'accueil.");
  } else {
    alert("❌ Installation annulée – vous pouvez réessayer plus tard.");
  }

  deferredPrompt = null;
});

// Enregistrement du Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("✅ Service Worker enregistré"))
    .catch(err => console.error("❌ Échec Service Worker:", err));
}

// Message de bienvenue si PWA en standalone
window.addEventListener("load", () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    alert("🎉 Bienvenue dans TheraQuiz – طب بالدارجة !");
  }
});
