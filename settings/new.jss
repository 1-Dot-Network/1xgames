// cookie policy
$(document).on("ready", function () {
  if (document.cookie.indexOf("accepted_cookies=") < 0) {
    $(".cookie-overlay").removeClass("d-none").addClass("d-block");
  }

  $(".accept-cookies").on("click", function () {
    document.cookie = "accepted_cookies=yes;";
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });

  // expand depending on your needs
  $(".close-cookies").on("click", function () {
    $(".cookie-overlay").removeClass("d-block").addClass("d-none");
  });
});