# Cave Cleusix

Site statique de la Cave Cleusix : HTML, CSS et un peu de JavaScript. Aucun build, aucun WordPress, aucun PHP. Les fichiers se servent tels quels.

## Aperçu local

Depuis ce dossier :

```bash
python3 -m http.server 8080
```

Puis ouvrir [http://127.0.0.1:8080](http://127.0.0.1:8080).

Pages :

- `/` — accueil
- `/histoire.html` — notre histoire
- `/vins.html` — les quatre cuvées
- `/vins/humagne-rouge.html`
- `/vins/pinot-noir.html`
- `/vins/sangiovese.html`
- `/vins/4e-cuvee.html`
- `/contact.html`

## Vins

Humagne Rouge, Pinot Noir Vieilles Vignes, Sangiovese, puis la 4e cuvée. Chaque fiche a un emplacement vide `data-shopify-buy` pour un futur bouton Shopify. Il n’y a pas de paiement sur ce site.

Les prix affichés (CHF 15.–, CHF 15.–, CHF 20.–) sont ceux publiés sur [cavecleusix.ch](https://www.cavecleusix.ch). La 4e cuvée n’a pas de prix en ligne.

`images/Savagnin.png` reste dans le dossier. Ce n’est pas l’une des quatre cuvées du site actuel, donc elle n’est pas présentée comme un produit.
