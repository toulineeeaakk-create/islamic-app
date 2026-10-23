<script>
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .then(() => console.log("زاد الهدى: تم تفعيل الخدمة بنجاح"))
      .catch((error) => {
        console.error("تعذر تفعيل الخدمة:", error);
      });
  });
}
</script>
