/* ==========================================================================
   FILTERING script for portfolio, glightbox setup
   ========================================================================== */


// IMPORTANT: attach to window so inline onclick can find it
window.filterArt = function (type, clickedButton) {
  const items = document.querySelectorAll('.gallery a');

  items.forEach(item => {
    const media = item.querySelector('img, video');

    if (!media) return;

    if (type === 'all' || media.classList.contains(type)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  // update active button state
  document.querySelectorAll('.filters button').forEach(btn => {
    btn.classList.remove('active');
  });

  if (clickedButton) {
    clickedButton.classList.add('active');
  }
};


// ===============================
// GLIGHTBOX INIT
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const lightbox = GLightbox({
    selector: '.glightbox',
    autoplayVideos: false // prevents YouTube autoplay on open
  });

});




// ===============================
// OPTIONAL: DEBUG HELP (safe to remove later)
// ===============================

console.log("portfolio.js loaded successfully");