document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".primary-toggle, .btn[aria-label='Toggle primary sidebar']");
    const sidebar = document.querySelector(".bd-sidebar");

    if (toggleBtn && sidebar) {
        toggleBtn.removeAttribute("disabled");
        toggleBtn.style.pointerEvents = "auto";
        toggleBtn.style.cursor = "pointer";

        toggleBtn.addEventListener("click", function(e) {
            e.preventDefault();
            sidebar.classList.toggle("show"); // Menyesuaikan dengan kelas tema untuk menyembunyikan/menampilkan
        });
    }
});
