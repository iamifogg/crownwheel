# Crownwheel

Crownwheel is a standalone, installable medieval-fantasy nation wheel and living-world simulator.

## What this build includes

- 20 nation-generation wheels with very large outcome pools.
- Mobile-first redesigned UI with Forge, World and Chronicle views.
- Adding a realm **does not leave the Forge screen**. The realm is saved, the founding draft resets immediately, and a fresh randomly named nation is ready to generate.
- Persistent autosave via browser local storage after spins, nation creation, diplomacy and yearly turns.
- Export/import JSON backups.
- Installable Progressive Web App metadata and offline service worker.
- Persistent wars with annual campaigns, casualties, territorial loss and peace outcomes.
- Expanded direct diplomacy: war, raids, alliances, trade, non-aggression, royal marriages, aid, espionage, sabotage, embargoes, magical exchanges, tribute demands, vassalage, border settlements and ceasefires.
- Large annual event engine covering economics, harvests, taxation, revolts, succession, religion, plagues, natural disasters, monsters, military reform, fortifications, navies, magical breakthroughs/catastrophes, migration, espionage, coups, cultural golden ages and inter-realm developments.
- Multi-realm chronicle recording major history.

## Run locally

Because Crownwheel uses a service worker, run it through a local web server rather than opening `index.html` directly.

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Publish with GitHub Pages

1. Create a **new repository named `crownwheel`**. Do not use or modify any other project repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the default branch (usually `main`) and `/ (root)`, then save.
6. Open the Pages URL on Android.
7. In Chrome or Samsung Internet, use the browser menu and choose **Install app** / **Add to Home screen**.

World data is stored locally on the phone. Use **Chronicle → Export Save** before clearing browser/app data or moving to another phone.

## Files

- `index.html` — application shell and UI.
- `styles.css` — responsive medieval interface.
- `chunks/` — the application engine split into deployable script parts, plus a small loader.
- `manifest.webmanifest` — PWA install metadata.
- `service-worker.js` — offline cache.
- `icons/icon.svg` — install/home-screen icon.
