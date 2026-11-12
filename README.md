# Cartridge Academy

A browser learning workspace for a returning C++ developer building an original Game Boy Advance game with Butano, mGBA, GNU GDB, Neovim, Git, and GitHub on WSL Ubuntu.

## Run locally

No dependencies or build step are required. Run `npm run dev` and open `http://localhost:5173`. Serve over HTTP rather than opening index.html directly because the app uses JavaScript modules.

## Contents

- `dist/app.js`: routing, quest stepper, progress, notes, focus timer, recall deck, import/export (old v1 backups migrate automatically).
- `dist/curriculum.js`: tracks and lesson aggregation. Planned lessons show on the map as "planned".
- `dist/content/*.js`: lessons. Each is a quest: hook, predict, try it, break it, decide, twist, check. `bootcamp.js` and `core.js` are written; genre tracks, art side quests, and the capstone are next.
- `dist/pedagogy.js`: learning principles and glossary. Recall cards are generated from each lesson's check questions.
- `dist/labs.js`: interactive game-loop, collision, fixed-point, and pixel-art labs.
- `scripts/compile-lessons.mjs`: compiles every lesson's C++ example against Butano in a scratch copy of a Butano project (`node scripts/compile-lessons.mjs <scratch-project>`).

The app does not execute C++, read local WSL files, or run a GBA emulator. Coding tasks happen in the learner's own project. Mission completion records self-reported evidence. Browser labs are conceptual models, clearly labelled as such. The source project at `~/Unamed-Project` was inspected read-only; no source game files were changed.

Progress and pixel art persist in localStorage on the current browser origin. Export a backup in settings to move between devices or keep an offline copy. Imports replace course progress and restore included pixel artwork. No server database, tracking, API key, or account integration is used by the app. Web fonts are optional; local font fallbacks are provided.

## Verify

`npm run check` checks JavaScript syntax. Browser QA covers responsive layout, mission progression and persistence, search, recall grading, notes, settings/backups, focus timer, and the interactive lab controls. Actual ROM development requires the learner's installed GBA toolchain.

## Teaching approach

Predict, build, inspect, retrieve, explain, and transfer. Evidence and university guidance are linked inside Resources → How learning works. Reviews use simple 1/3/7/14/30-day intervals. These intervals are practical defaults, not an optimized prescription. There are no missed-day penalties or claims that completing a checklist guarantees expertise.

## Hosting

Deployed to GitHub Pages by `.github/workflows/pages.yml` on every push to `main`. In the repository settings, set Pages → Source to "GitHub Actions". The site will be at https://cavelazquez8.github.io/cartridge-academy/.
