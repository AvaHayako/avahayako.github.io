/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function () {

  // ================================
  // FORCE DARK MODE (no switching)
  // ================================
  localStorage.setItem("theme", "dark");
  $("html").attr("data-theme", "dark");

  // detect OS/browser preference (kept but ignored)
  const browserPref = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'dark'; // forced anyway

  // Set the theme on page load or when explicitly called
  var setTheme = function (theme) {
    // always force dark regardless of input or stored values
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  };

  setTheme();

  // DISABLE OS THEME CHANGES (prevent auto switching)
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener("change", (e) => {
      $("html").attr("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    });

  // DISABLE TOGGLE LOGIC (hard override)
  var toggleTheme = function () {
    $("html").attr("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  };

  $('#theme-toggle').on('click', toggleTheme);

  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;

  bumpIt();

  $(window).resize(function () {
    didResize = true;
  });

  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= 925) {
      $(".author__urls").css('display', 'block');
    }
  });

  // Smooth scroll (masthead offset)
  $("a").smoothScroll({
    offset: -75,
    preventDefault: false,
  });

  // Lightbox image handling
  $("a[href$='.jpg'],\
  a[href$='.jpeg'],\
  a[href$='.JPG'],\
  a[href$='.png'],\
  a[href$='.gif'],\
  a[href$='.webp']")
    .not(':has(img)')
    .addClass("image-popup");

  $('p > img').not('.emoji').each(function () {
    var $img = $(this);
    if (!$img.parent().is('a.image-popup')) {
      $('<a>')
        .addClass('image-popup')
        .attr('href', $img.attr('src'))
        .insertBefore($img)
        .append($img);
    }
  });

  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500,
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        this.st.image.markup =
          this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true
  });

});