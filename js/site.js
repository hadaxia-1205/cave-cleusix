(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Fermer" : "Menu";
    });
  }

  var send = document.querySelector("[data-contact-send]");
  if (send) {
    send.addEventListener("click", function () {
      var status = document.querySelector("[data-contact-status]");
      if (status) {
        status.textContent = "L’envoi en ligne n’est pas encore en service. Appelez-nous au 079 299 11 84.";
      }
    });
  }
})();
