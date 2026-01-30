CQFD — Site de vente (améliorations)

Ce dépôt contient une petite boutique statique améliorée avec :

- Pages HTML améliorées (accessibilité, images optimisées en WebP)
- Galeries : recherche, tri, pagination côté client
- Favoris persistants (localStorage) visibles depuis la page de contact
- Backend minimal en Node.js/Express pour recevoir `/api/contact` et `/api/order` et persister localement

Backend :
- Dossier `server/` (exécuter `cd server && npm install && npm start`)

Optimisations :
- Images converties en WebP et AVIF et intégrées via `<picture>` pour un meilleur chargement
- Générer (ou régénérer) les images optimisées :
  - `cd server && npm run gen-images` (WebP redimensionné)
  - `cd server && npm run gen-avif` (AVIF redimensionné)

