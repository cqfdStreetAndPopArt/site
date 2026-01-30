# site

## Améliorations appliquées ✅
- Structure des pages produits améliorée (balises sémantiques, meta JSON-LD pour SEO).
- Galerie : recherche, tri, pagination côté client.
- Favoris (stockés en localStorage) : interface accessible et partage par mailto.
- Images : lazy-loading et attributs pour réduire le CLS.
- Page contact : formulaire accessible, validation JS et fallback mailto.
- Améliorations d'accessibilité (focus, aria, rôles).

## Prochaines recommandations 🔧
- Générer des versions WebP/AVIF et images redimensionnées pour chaque vignette et image principale (ImageMagick ou cwebp).
- Ajouter une page d'administration / back-end pour commandes et envoi d'emails.

## Commandes utiles (sur Linux, pour optimiser les images)
- Installer ImageMagick : `sudo apt update && sudo apt install imagemagick -y`
- Générer une image WebP : `magick input.jpg -quality 80 output.webp`
- Générer un AVIF (si libavif disponible) : `magick input.jpg -quality 70 output.avif`

---

Si vous voulez, je peux :
1) Optimiser automatiquement les images (convertir et créer srcset),
2) Ajouter recherche avancée et tags, ou
3) Mettre en place un formulaire de commande connecté (backend).

Dites-moi quelle tâche vous voulez que je fasse en premier.

---

### Backend local (nouveau)
J'ai ajouté un backend minimal dans `/server` (Express). Pour l'exécuter :

```bash
cd server
npm install
npm start
```

Le backend expose `/api/contact` et `/api/order` pour recevoir formulaires et commandes.
