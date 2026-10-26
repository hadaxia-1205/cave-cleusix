(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  function closeNav() {
    if (!toggle || !nav) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Fermer" : "Menu";
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  var send = document.querySelector("[data-contact-send]");
  if (send) {
    send.addEventListener("click", function () {
      var status = document.querySelector("[data-contact-status]");
      var prenom = document.getElementById("prenom");
      var nom = document.getElementById("nom");
      var email = document.getElementById("email");
      var sujet = document.getElementById("sujet");
      var message = document.getElementById("message");
      var name = [prenom && prenom.value, nom && nom.value].map(function (value) {
        return (value || "").trim();
      }).filter(Boolean).join(" ");
      var body = (message && message.value || "").trim();
      if (!name || !body) {
        if (status) status.textContent = "Indiquez votre nom et votre message.";
        if (!name && prenom) prenom.focus();
        else if (message) message.focus();
        return;
      }
      var lines = [
        "Bonjour, je vous contacte depuis le site Cave Cleusix.",
        "Nom : " + name
      ];
      if (email && email.value.trim()) lines.push("Email : " + email.value.trim());
      if (sujet && sujet.value.trim()) lines.push("Sujet : " + sujet.value.trim());
      lines.push(body);
      window.open("https://wa.me/41793518623?text=" + encodeURIComponent(lines.join("\n")), "_blank", "noopener,noreferrer");
      if (status) status.textContent = "Votre message s’ouvre dans WhatsApp.";
    });
  }

  if (!document.querySelector(".whatsapp-chat")) {
    var chat = document.createElement("a");
    chat.className = "whatsapp-chat";
    chat.href = "https://wa.me/41793518623?text=Bonjour%2C%20je%20vous%20contacte%20depuis%20le%20site%20Cave%20Cleusix.";
    chat.target = "_blank";
    chat.rel = "noopener noreferrer";
    chat.setAttribute("aria-label", "WhatsApp");
    chat.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16.01 3C9.4 3 4 8.37 4 15c0 2.1.55 4.15 1.6 5.95L4 29l8.2-1.55A12 12 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16.01 3zm6.95 17.15c-.29.82-1.7 1.57-2.35 1.67-.6.09-1.36.13-2.2-.14-.5-.16-1.15-.38-1.98-.74-3.48-1.5-5.75-5.01-5.92-5.24-.17-.23-1.4-1.86-1.4-3.55 0-1.69.88-2.52 1.2-2.86.31-.34.68-.42.91-.42.23 0 .45 0 .65.01.21.01.48-.08.75.57.29.68.97 2.36 1.05 2.53.08.17.14.37.03.6-.11.23-.17.37-.33.57-.17.2-.35.44-.5.59-.17.17-.34.35-.15.68.2.34.87 1.43 1.86 2.32 1.28 1.14 2.36 1.49 2.7 1.66.34.17.54.14.74-.08.2-.23.85-.99 1.08-1.33.23-.34.45-.28.76-.17.31.11 1.97.93 2.31 1.1.34.17.56.25.65.39.08.14.08.81-.21 1.63z"/></svg>';
    document.body.appendChild(chat);
  }
})();
