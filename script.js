// Variabel untuk melacak status sidebar
let sidebarVisible = false;

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".toggle-sidebar");

  if (sidebarVisible) {
    sidebar.classList.add("hidden");
    sidebarVisible = false;
  } else {
    sidebar.classList.remove("hidden");
    sidebarVisible = true;
  }

  // Memastikan tombol toggle selalu berada di tempat yang sama
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "20px";
  toggleButton.style.right = "20px";
}

// Fungsi untuk menyembunyikan sidebar secara otomatis saat halaman dimuat
function hideSidebarOnLoad() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("hidden");
  sidebarVisible = false;
}

// Panggil fungsi hideSidebarOnLoad saat halaman selesai dimuat
window.addEventListener("load", hideSidebarOnLoad);

// Fungsi untuk menyembunyikan elemen-elemen saat sidebar terbuka
function sembunyikanElemenSaatSidebarTerbuka() {
  const sidebar = document.querySelector(".sidebar");
  const socialMedia = document.querySelector(".social-media");
  const gameIcon = document.querySelector(".fas.fa-gamepad");
  const startButton = document.querySelector(".start-button");

  function updateVisibility() {
    if (!sidebar.classList.contains("hidden")) {
      // Sidebar terbuka, sembunyikan elemen-elemen
      socialMedia.style.display = "none";
      gameIcon.style.display = "none";
      startButton.style.display = "none";
    } else {
      // Sidebar tertutup, tampilkan kembali elemen-elemen
      socialMedia.style.display = "flex";
      gameIcon.style.display = "block";
      startButton.style.display = "inline-block";
    }
  }

  // Panggil fungsi saat halaman dimuat
  updateVisibility();

  // Tambahkan event listener untuk toggle sidebar
  const toggleButton = document.querySelector(".toggle-sidebar");
  toggleButton.addEventListener("click", updateVisibility);
}

// Panggil fungsi saat halaman selesai dimuat
window.addEventListener("load", sembunyikanElemenSaatSidebarTerbuka);

// Fungsi untuk mengelola animasi profil
function kelolaAnimasiProfil() {
  const sidebar = document.querySelector(".sidebar");
  const profileImage = document.querySelector(".profile-image");

  function updateAnimasiProfil() {
    if (!sidebar.classList.contains("hidden")) {
      // Sidebar terbuka, nonaktifkan animasi
      profileImage.style.transition = "none";
      profileImage.style.transform = "none";
      profileImage.style.boxShadow = "none";
    } else {
      // Sidebar tertutup, aktifkan kembali animasi
      profileImage.style.transition = "all 0.3s ease";
      profileImage.style.transform = "";
      profileImage.style.boxShadow = "";
    }
  }

  // Panggil fungsi saat halaman dimuat
  updateAnimasiProfil();

  // Tambahkan event listener untuk toggle sidebar
  const toggleButton = document.querySelector(".toggle-sidebar");
  toggleButton.addEventListener("click", updateAnimasiProfil);
}

// Panggil fungsi saat halaman selesai dimuat
window.addEventListener("load", kelolaAnimasiProfil);
