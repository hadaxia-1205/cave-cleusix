/* Boutons Shopify. Le script de la boutique n’est chargé qu’une fois par page.
   Sur une page à plusieurs vins, un seul panier est créé (le premier composant). */
(function () {
  var nodes = document.querySelectorAll("[data-shopify-product]");
  if (!nodes.length) return;

  var scriptURL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  var siteBg = "#9d8467";
  var siteHover = "#8a7358";
  var siteText = "#2c241c";

  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function buttonStyle(bg, hover, fullWidth) {
    var style = {
      "background-color": bg,
      color: siteText,
      ":hover": { "background-color": hover, color: siteText },
      ":focus": { "background-color": hover, color: siteText },
      "border-radius": "16px",
    };
    if (fullWidth) {
      style.width = "100%";
      style["padding-top"] = "14px";
      style["padding-bottom"] = "14px";
      style["padding-left"] = "24px";
      style["padding-right"] = "24px";
    }
    return style;
  }

  function optionsFor(bg, hover, cartBg, cartHover) {
    return {
      product: {
        width: "100%",
        buttonDestination: "cart",
        contents: {
          img: false,
          imgWithCarousel: false,
          title: false,
          variantTitle: false,
          price: false,
          unitPrice: false,
          options: false,
          quantity: false,
          button: true,
          buttonWithQuantity: false,
          description: false,
        },
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              width: "100%",
              "margin-left": "0px",
              "margin-bottom": "0px",
            },
            "max-width": "100%",
            width: "100%",
            "margin-left": "0px",
            "margin-bottom": "0px",
          },
          button: buttonStyle(bg, hover, true),
        },
        text: {
          button: "Ajouter au panier",
        },
      },
      modalProduct: {
        contents: {
          img: false,
          imgWithCarousel: true,
          button: false,
          buttonWithQuantity: true,
        },
        styles: {
          product: {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px",
            },
          },
          button: buttonStyle(bg, hover, false),
        },
        text: {
          button: "Ajouter au panier",
        },
      },
      cart: {
        styles: {
          button: buttonStyle(cartBg, cartHover, false),
        },
        text: {
          title: "Panier",
          total: "Sous-total",
          button: "Commander",
          empty: "Votre panier est vide.",
          notice: "Les frais de port et les codes de réduction sont ajoutés lors du paiement.",
          closeAccessibilityLabel: "Fermer le panier",
        },
      },
      toggle: {
        styles: {
          toggle: {
            "background-color": cartBg,
            color: siteText,
            ":hover": { "background-color": cartHover, color: siteText },
            ":focus": { "background-color": cartHover, color: siteText },
            "border-radius": "16px",
          },
          count: { color: siteText },
          iconPath: { fill: siteText },
        },
      },
    };
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "8wbiia-eb.myshopify.com",
      storefrontAccessToken: "5e142437f86b8d1ef6f22daf965f23ca",
    });
    var sharedCart = nodes.length > 1;
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      nodes.forEach(function (node) {
        var bg = node.getAttribute("data-button-bg");
        var hover = node.getAttribute("data-button-hover");
        ui.createComponent("product", {
          id: node.getAttribute("data-shopify-product"),
          node: node,
          moneyFormat: "CHF%20%7B%7Bamount%7D%7D",
          options: optionsFor(bg, hover, sharedCart ? siteBg : bg, sharedCart ? siteHover : hover),
        });
      });
    });
  }

  if (window.ShopifyBuy && window.ShopifyBuy.UI) {
    ShopifyBuyInit();
  } else {
    loadScript();
  }
})();
