// 📱 TheraQuiz – app.js

let deferredPrompt;

// 👇 نستنى إشارة من المتصفح باش نعرض زر التحميل
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  const installBtn = document.getElementById("installBtn");
  if (installBtn) installBtn.style.display = "inline-block";
});

// 👇 الزر اللي كيدير "إضافة للتطبيق"
document.getElementById("installBtn")?.addEven

tListener("click", async () => {
  if (!deferredPrompt) {
    alert("ℹ️ التطبيق جاهز – استعمل خيار 'إضافة إلى الشاشة الرئيسية' من المتصفح.");
    return;
  }

  deferredPrompt.prompt(

);
  const { outcome } = await deferredPrompt.userChoice;

  if (outcome === "accepted") {
    alert("✅ تم تثبيت التطبيق – ستجده على الشاشة الرئيسية.");
  } else {

    alert("❌ ألغيت التثبيت – يمكنك المحاولة لاحقًا.");
  }

  deferredPrompt = null;
});

// 👇 تسجيل Service Worker
if ("serviceWorker" in navigator) {
  

navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("✅ Service Worker مسجل بنجاح"))
    .catch((err) => console.error("❌ فشل تسجيل Service Worker:", err));
}

// 👇 رسالة ترحيب إذا التطبيق مفتوح كـ PWA
window.addEventListener("load", () => {
  if (window.matchMedia("(display-mode: standalone)").matches) {
    alert("🎉 مرحباً بك في تطبيق TheraQuiz – طب بالدارجة!");

  }
});
