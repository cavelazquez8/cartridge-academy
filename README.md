# Cartridge Academy

A browser learning workspace for a returning C++ developer building an original Game Boy Advance game with Butano, mGBA, GNU GDB, Neovim, Git, and GitHub on WSL Ubuntu.

## Run locally

No dependencies or build step are required. Run `npm run dev` and open `http://localhost:5173`. Serve over HTTP rather than opening index.html directly because the app uses JavaScript modules.

## Contents

- `dist/app.js`: routing, mission workspace, progress, journal, focus timer, retrieval practice, import/export.
- `dist/curriculum.js`: 28 substantive missions across seven worlds, with tasks, examples, observable checks, questions, transfer challenges, and primary sources.
- `dist/pedagogy.js`: evidence-linked learning principles, spaced-review cards, and glossary.
- `dist/labs.js`: interactive game-loop, collision, fixed-point, and pixel-art/animation labs. BMP export uses an uncompressed 4bpp indexed Windows BMP and corresponding Butano sprite JSON.
- `dist/style.css`: responsive presentation.

The app does not execute C++, read local WSL files, or run a GBA emulator. Coding tasks happen in the learner's own project. Mission completion records self-reported evidence. Browser labs are conceptual models, clearly labelled as such. The source project at `~/Unamed-Project` was inspected read-only; no source game files were changed.

Progress and pixel art persist in localStorage on the current browser origin. Export a backup in settings to move between devices or keep an offline copy. Imports replace course progress and restore included pixel artwork. No server database, tracking, API key, or account integration is used by the app. Web fonts are optional; local font fallbacks are provided.

## Verify

`npm run check` checks JavaScript syntax. Browser QA covers responsive layout, mission progression and persistence, search, recall grading, notes, settings/backups, focus timer, and the interactive lab controls. Actual ROM development requires the learner's installed GBA toolchain.

## Teaching approach

Predict, build, inspect, retrieve, explain, and transfer. Evidence and university guidance are linked inside Resources → How learning works. Reviews use simple 1/3/7/14/30-day intervals. These intervals are practical defaults, not an optimized prescription. There are no missed-day penalties or claims that completing a checklist guarantees expertise.

This Site is configured for private hosting in `.openai/hosting.json`.
